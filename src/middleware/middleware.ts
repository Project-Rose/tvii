import { Request, Response, NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction): void => {
    const userAgent = req.get("User-Agent");
    const httpVersion = req.httpVersion;
    const headers = req.headers;
    
    if (userAgent !== "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/534.52 (KHTML, like Gecko) NX/2.1.0.10.9 vn/1.5.US" && req.path !== "/whitelist.txt") {
        res.status(403).contentType("text/plain").send("Please use Project Rosé on a Nintendo Wii U system!\n\nFor support, join our Discord!\nhttps://discord.gg/AaTsXndGun");
        return;
    };
    
    if (httpVersion !== "1.1") {
        res.status(403).contentType("text/plain").send("Please use Project Rosé on a Nintendo Wii U system!\n\nFor support, join our Discord!\nhttps://discord.gg/AaTsXndGun");
        return;
    };
    
    const requiredHeaders = [
        "x-nintendo-principal-id-09",
        "x-nintendo-principal-id-12",
        "x-nintendo-principal-id-02",
        "x-nintendo-principal-id-01",
        "x-nintendo-principal-id-03",
        "x-nintendo-principal-id-04",
        "x-nintendo-country-code",
        "x-nintendo-principal-id-08",
        "x-nintendo-service-token",
        "x-nintendo-principal-id-06",
        "x-nintendo-returned-from-other",
        "x-nintendo-white-list-get-count",
        "x-nintendo-principal-id-07",
        "x-nintendo-current-principal-id",
        "x-nintendo-principal-id-10",
        "x-nintendo-principal-id-11",
        "x-nintendo-principal-id-05",
        "x-nintendo-release-version",
    ];
    
    if (req.path !== "/whitelist" && req.path !== "/whitelist.txt") {
        for (const header of requiredHeaders) {
            if (!(header in headers)) {
                res.status(403).contentType("text/plain").send("Please use Project Rosé on a Nintendo Wii U system!\n\nFor support, join our Discord!\nhttps://discord.gg/AaTsXndGun");
                return;
            };
        };
    };
    
    next();
};

export default middleware;
