import express, { query, Response } from "express";
import chalk from "chalk";
import dayjs from "dayjs";
import sharp from "sharp";
import axios from "axios";
import config from "../../../config/config.json" with { type: "json" };
import tvRatingJson from "../../../config/tvRating.json" with { type: "json" };
import movieRatingJson from "../../../config/movieRating.json" with { type: "json" };
import blacklist from "../../../config/blacklist.json" with { type: "json" }; // Porn blacklist (TMDB lots of adult content)
import { logger } from "../../utils/logger.js";

const router = express.Router();
const tmdbApiKey = config.api["tmdb-api-key"];
const mainApiUrl = config.api["main-api-url"];

const getDGRegion = (country: string): string | null => {
    switch (country) {
        case "US":
            return "USA";
        case "CA":
            return "CAN";
        case "PE":
            return "PER";
        case "AR":
            return "ARG";
        case "MX":
            return "MEX";
        case "CL":
            return "CHL";
        case "CR":
            return "CRI";
        case "ES":
            return "ESP";
        default:
            return null; // Return null if no match found
    }
};

const fixCountryCode = (countryCode: string): string | null => {
    switch (countryCode) {
        // JP TVii returns jp as language instead of the correct ja
        case "jp-JP":
            return "ja-JP";
        // Most MovieDB Latin American spanish translations are set in es-MX
        case "es-AR": // Argentina
        case "es-BO": // Bolivia
        case "es-CL": // Chile
        case "es-CO": // Colombia
        case "es-CR": // Costa Rica
        case "es-DO": // Dominican Republic
        case "es-EC": // Ecuador
        case "es-GT": // Guatemala
        case "es-HN": // Honduras
        case "es-MX": // Mexico
        case "es-NI": // Nicaragua
        case "es-PA": // Panama
        case "es-PE": // Peru
        case "es-PR": // Puerto Rico
        case "es-UY": // Uruguay
        case "es-VE": // Venezuela
        case "es-US": // EE.UU
            return "es-MX";
        default:
            return countryCode; // Return country code thats normal
    }
};

const handleTMDBProvider = (ourProviderQuery: string) => {
    // Split the input string into an array, or use an empty array if input is null or undefined
    const providers =
    ourProviderQuery && ourProviderQuery != ""
        ? ourProviderQuery.split(",")
        : [];
    let providerIdsString = "";
    
    // If the providers array is empty or contains an empty string, add all provider IDs
    if (providers.length === 0 || providers[0].trim() === "") {
        const allProviderIds = [
            "8",
            "283",
            "15",
            "2",
            "9",
            "337",
            "531",
            "387",
            "1899",
        ];
        for (let i = 0; i < allProviderIds.length; i++) {
            providerIdsString += allProviderIds[i] + "|";
        }
    } else {
        // Check each provider and add the corresponding number to the string
        if (providers.includes("netf")) providerIdsString += "8|";
        if (providers.includes("crun")) providerIdsString += "283|";
        if (providers.includes("hulu")) providerIdsString += "15|";
        if (providers.includes("appltv")) providerIdsString += "2|";
        if (providers.includes("amapr")) providerIdsString += "9|";
        if (providers.includes("displu")) providerIdsString += "337|";
        if (providers.includes("parplu")) providerIdsString += "531|";
        if (providers.includes("peacoc")) providerIdsString += "387|";
        if (providers.includes("max")) providerIdsString += "1899|";
    }
    
    // Remove the last "|" character if the string is not empty
    if (providerIdsString.endsWith("|")) {
        providerIdsString = providerIdsString.slice(0, -1);
    }
    
    return providerIdsString;
};

const getTVRatings = () => {
    return {
        type: "json",
        data: tvRatingJson,
    };
};

const getMovieRatings = () => {
    return {
        type: "json",
        data: movieRatingJson,
    };
};

const fetchFromTMDB = async (
    url: string,
    res: Response,
    returnRawResponse = false,
) => {
    try {
        const response = await axios(url, {
            headers: {
                Authorization: `Bearer ${tmdbApiKey}`,
            },
        });
        
        if (response.status !== 200) {
            res
                .status(500)
                .send({ error: "Failed to fetch data from the movie database" });
            return null;
        }
        
        const data = response.data;
        
        if (data.results && Array.isArray(data.results)) {
            data.results = data.results.filter(
                (entry: any) => !blacklist.includes(entry.id),
            );
        }
        
        if (returnRawResponse) {
            return data;
        }
        
        res.send(data);
    } catch (e) {
        logger.error(`Error fetching from TMDB! ${e}`);
        res.status(500).send({ error: "Failed to fetch data from the movie database" });
    }
};

const fetchFromDG = async (
    url: string,
    res: Response,
    returnRawResponse = false,
) => {
    try {
        const response = await axios(url);
        
        if (response.status !== 200) {
            res.status(response.status).send({
                error: "Failed to fetch data from API",
                details: response.data || "No details available",
            });
            return null;
        }
        
        const data = response.data;
        
        if (returnRawResponse) {
            return data;
        }
        
        res.status(response.status).send(data);
    } catch (e) {
        logger.error(`Error fetching from Zap2It! ${e}`);
        res.status(500).send({ error: "Failed to fetch data from Zap2It" });
    }
};

router.get("/image", async (req, res) => {
    const imageUrl = (req.query.url as string) || "";
    const widthParam = req.query.width as string;
    
    if (!imageUrl) {
        res.status(400).contentType("text/plain").send("Please request an image.");
        return;
    }
    
    try {
        const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });
        
        if (imgRes.status !== 200) {
            throw new Error("Failed to fetch image from the provided URL");
        }
        
        let imageBuffer = Buffer.from(imgRes.data);
        const contentType = imgRes.headers["content-type"] || "image/png";
        
        if (widthParam && parseInt(widthParam, 10) > 0) {
            const width = parseInt(widthParam, 10);
            imageBuffer = await sharp(imageBuffer)
                .resize(width)
                .toFormat("png") // Ensure output format is PNG
                .toBuffer();
        }
        
        res.set("Content-Type", contentType).send(imageBuffer);
    } catch (error) {
        logger.error(`Error fetching or processing image! ${error}`);
        res
            .status(500)
            .contentType("text/plain")
            .send("Failed to fetch/Process your image!");
    }
});

router.get("/getStreamingMovies", async (req, res) => {
    const lang = (req.query.lang as string) || "";
    const country = (req.query.country as string) || "";
    const page = (req.query.page as string) || "";
    const tmdbQuery = decodeURIComponent(req.query.query as string);
    const fixedProviders = await handleTMDBProvider(
        req.query.providers as string,
    );
    const fixedLang = fixCountryCode(lang);
    const fixedPage = page ? page : "1";
    
    await fetchFromTMDB(
        "https://api.themoviedb.org/3/discover/movie?page=" +
        fixedPage +
        "&include_adult=false&language=" +
        fixedLang +
        "&watch_region=" +
        country +
        "&with_watch_providers=" +
        fixedProviders +
        tmdbQuery,
        res,
    );
});

router.get("/getStreamingTV", async (req, res) => {
    const lang = (req.query.lang as string) || "";
    const country = (req.query.country as string) || "";
    const page = (req.query.page as string) || "";
    const tmdbQuery = decodeURIComponent(req.query.query as string);
    const fixedProviders = await handleTMDBProvider(
        req.query.providers as string,
    );
    const fixedLang = fixCountryCode(lang);
    const fixedPage = page ? page : "1";
    
    await fetchFromTMDB(
        "https://api.themoviedb.org/3/discover/tv?page=" +
        fixedPage +
        "&include_adult=false&language=" +
        fixedLang +
        "&watch_region=" +
        country +
        "&with_watch_providers=" +
        fixedProviders +
        tmdbQuery,
        res,
    );
});

router.get("/channels", async (req, res) => {
    const zipcode = req.query.zipcode;
    const lineupId = req.query.lineupId;
    const headendId = req.query.headendId;
    const device = req.query.device;
    const lang = req.query.lang || "";
    const time = req.query.date as string;
});

router.get("/grid", async (req, res) => {
    res.send("Coming Soon!");
});

router.get("/getTVProvidersByZipCode", async (req, res) => {
    const zipcode = req.query.zipcode;
    const lang = req.query.lang;
    const country = req.query.country;
    
    if (!zipcode || !country || !lang) {
        res.status(400).send({
            error: "Missing required parameters: zipcode, country, and lang",
        });
        return;
    }
    
    const fixedRegion = getDGRegion(country as string);
    if (!fixedRegion) {
        res.status(400).send({ error: "Invalid country provided." });
        return;
    }
    
    const fixedUrl =
    mainApiUrl +
    `lineupSearch?zipcode=${zipcode}&countryCode=${fixedRegion}&limit=100`;
    
    try {
        const data = await fetchFromDG(fixedUrl, res, true);
        
        if (!data || !data.hits || data.hits.length < 1) {
            res.status(500).send({ error: "No provider data found." });
            return;
        }
        
        // Filter providers to ensure they have the `metadata` field
        const filteredProviders = data.hits.filter(
            (provider: { metadata?: { msoId?: string } }) =>
                provider.metadata && provider.metadata.msoId,
        );
        
        // Sort the providers by `msoId`
        const sortedProviders = filteredProviders.sort(
            (
                a: { metadata: { msoId: string } },
                b: { metadata: { msoId: string } },
            ) => {
                const msoIdA = a.metadata.msoId;
                const msoIdB = b.metadata.msoId;
                return msoIdA.localeCompare(msoIdB, undefined, { numeric: true });
            },
        );
        
        // Fetch channel data for each provider
        for (const provider of sortedProviders) {
            try {
                const channelResponse = await axios.get(
                    mainApiUrl + `/stationData?lineupId=${provider.id}&limit=3`,
                );
                provider.channels = channelResponse.data.hits || []; // Add the "hits" as "channels"
                provider.channelAmount = channelResponse.data.hitCount || 0;
            } catch (channelError) {
                logger.error(`Error fetching channel data for provider ID ${provider.id}: ${channelError}`);
                provider.channels = []; // Default to empty array if the request fails
                provider.channelAmount = 0;
            }
        }
        
        // Respond with the sorted list
        res.send({
            queryId: data.queryId,
            hitCount: sortedProviders.length,
            hits: sortedProviders,
        });
    } catch (error) {
        logger.error(`Error fetching data: ${error}`);
        res.status(500).send({ error: "Failed to fetch data from the provider API." });
    }
});

router.get("/search", async (req, res) => {
    const lang = req.query.lang;
    const country = req.query.country;
    const searchQuery = req.query.q;
    const searchType = req.query.type;
    const page = req.query.page;
    const fixedProviders = await handleTMDBProvider(
        req.query.providers as string,
    );
    const fixedLang = fixCountryCode(lang as string);
    const fixedPage = page ? page : "1";
    
    switch (searchType) {
        case "person":
            await fetchFromTMDB(
                "https://api.themoviedb.org/3/discover/tv?page=" +
                fixedPage +
                "&with_text_query=" +
                searchQuery +
                "&include_adult=false&watch_region=" +
                country +
                "&with_watch_providers=" +
                fixedProviders +
                "&language=" +
                fixedLang,
                res,
            );
            break;
        case "tv":
            await fetchFromTMDB(
                "https://api.themoviedb.org/3/discover/tv?page=" +
                fixedPage +
                "&with_text_query=" +
                searchQuery +
                "&include_adult=false&watch_region=" +
                country +
                "&with_watch_providers=" +
                fixedProviders +
                "&language=" +
                fixedLang,
                res,
            );
            break;
        case "movie":
            await fetchFromTMDB(
                "https://api.themoviedb.org/3/discover/movie?page=" +
                fixedPage +
                "&with_text_query=" +
                searchQuery +
                "&include_adult=false&watch_region=" +
                country +
                "&with_watch_providers=" +
                fixedProviders +
                "&language=" +
                fixedLang,
                res,
            );
            break;
        case "live-tv":
            break;
        default:
            break;
    }
});

router.get("/streamingProviders", async (req, res) => {
    //We will hardcode streaming providers since TheMovieDB.org pulls a lot of them + use the older (and better LMAO!) images :)
    //Support for more countries later
    //Remove Hulu since its not available anywhere else but US
    const lang = req.query.lang;
    const country = req.query.country;
});

export default router;
