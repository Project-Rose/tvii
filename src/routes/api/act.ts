import express from "express";
import axios from "axios";
import chalk from "chalk";
import dayjs from "dayjs";
import bcrypt from "bcrypt-updated";
import { Database } from "../../db/db.js";
import { Account } from "../../db/act.js";
import { Lineup } from "../../db/lineup.js";
import { Settings } from "../../db/settings.js";
import { ParentalControls } from "../../db/parental_controls.js";
import { MSO } from "../../db/mso.js";
import { logger } from "../../utils/logger.js";

const router = express.Router();

router.post("/TWLinkAttempt", async (req, res) => {
    try {
        const response = await axios.get(
            "https://projectrose.cafe/tvii/generateTWCode?src=vino_app",
            {
                method: "GET",
            },
        );
        
        res.status(response.status).send(response.data);
    } catch (e) {
        console.log(
            chalk.bold.redBright(
                `[ERROR ${dayjs().format("HH:mm:ss")}] Error in /TWLinkAttempt! ${e}`,
            ),
        );
        res.status(500).send("Internal Server Error.");
    }
});

router.get("/TWCodeCheck", async (req, res) => {
    try {
        const code = req.query.code;
        const response = await axios.get(
            `https://projectrose.cafe/tvii/clientCheckTWCodeVerified?src=vino_app&code=${code}`,
            {
                method: "GET",
            },
        );
        
        res.status(response.status).send(response.data);
    } catch (e) {
        logger.error(`Error in /TWCodeCheck! ${e}`);
        res.status(500).send("Internal server error.");
    }
});

router.put("/new", async (req, res) => {
  const data = await req.body;
  const parentalControlsData = data.parental_controls;
  const lineupData = data.lineup;
  const dt = new Date();

  Database.initialize()
    .then(async () => {
      const accountRepository = Database.getRepository(Account);
      const parentalControlsRepository =
        Database.getRepository(ParentalControls);
      const lineupRepository = Database.getRepository(Lineup);
      const msoRepository = Database.getRepository(MSO);
      const settingsRepository = Database.getRepository(Settings);

      // Check if account exists
      const exists = await accountRepository.findOneBy({
        email: data.email,
        pid: data.pid,
      });

      // FIXME: is this the proper way to handle it
      if (exists) res.send({ success: 0 });

      if (!exists) {
        const acc = new Account();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        acc.creation_datetime = dt;
        acc.email = data.email;
        acc.password = hashedPassword;
        acc.environment = 1; // default
        acc.permission_level = 1; // default
        acc.mii_name = data.mii_name;
        acc.pid = data.pid;
        acc.pnid = data.pnid;
        acc.last_login_datetime = dt;

        await accountRepository.save(acc);

        // TODO: cleanup
        let lineup = await lineupRepository.findOneBy({
          lineup_id: lineupData.lineup_id,
        });
        if (!lineup) {
          let mso = await msoRepository.findOneBy({
            mso_id: lineupData.mso_id,
          });
          if (!mso) {
            let mso = new MSO();
            mso.mso_id = lineupData.mso_id;
            mso.mso_name = lineupData.mso_name;

            await msoRepository.save(mso);
          }

          let lineup = new Lineup();
          lineup.lineup_id = lineupData.lineup_id;
          lineup.lineup_name = lineupData.lineup_name;
          lineup.lineup_type = lineupData.lineup_type;
          lineup.mso = mso!; // will not be null

          await lineupRepository.save(lineup);
        }

        const settings = new Settings();
        settings.account = acc; // Establishes the relationship for us
        settings.lineup = lineup!; // will not be null
        settings.streaming_providers_array = data.streaming_providers;
        settings.zip_code = data.zip_code;

        await settingsRepository.save(settings);

        const pc = new ParentalControls();
        pc.account_id = acc.account_id;
        pc.allowed_movie_ratings_array =
          parentalControlsData.allowed_movie_ratings_array;
        pc.allowed_tv_ratings_array =
          parentalControlsData.allowed_tv_ratings_array;

        await parentalControlsRepository.save(pc);

        res.send({ success: 1 });
      }
    })
    .catch(async (e) => {
      console.log(e);
      res.send({ success: 0 });
    })
    .finally(() => {
      Database.destroy(); // we are done, don't leave it open
    });
});

router.put("/login", async (req, res) => {
  const data = await req.body;
  Database.initialize()
    .then(async () => {
      const accountRepository = Database.getRepository(Account);

      // Check if account exists
      let exists = await accountRepository.findOneBy({
        email: data.email,
        pnid: data.pnid,
      });

      // Account doesn't exist (FIXME: error codes or something)
      if (!exists) res.send({ success: 0 });
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // check if it exists w/ password
      exists = await accountRepository.findOneBy({
        email: data.email,
        pnid: data.pnid,
        password: hashedPassword,
      });
      if (!exists) res.send({ success: 0 });
    })
    .catch(async (e) => {
      console.log(e);
      res.send({ success: 0 });
    })
    .finally(() => {
      Database.destroy(); // we are done, don't leave it open
    });
  res.send({ success: 1 }).contentType("application/json");
});

router.post("/BSLinkAttempt", async (req, res) => {
    try {
        const data = req.body;
        //console.log(data); STOP. LOGGING. PASSWORDS.
        const identifier = data.identifier;
        const passwd = data.password;
        
        if (!identifier || !passwd) {
            res.status(400).send({ error: "Identifier and password are required." });
            return;
        }
        
        const response = await axios({
            method: "POST",
            url: "https://bsky.social/xrpc/com.atproto.server.createSession",
            data: {
                identifier: identifier,
                password: passwd,
            },
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (response.status !== 200) {
            res.status(400).send({ error: "Could not log in to Bluesky" });
        } else {
            const data = response.data;
            
            const reqName = await axios.get(
                `https://bsky.social/xrpc/app.bsky.actor.getProfile?actor=${data.handle}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${data.accessJwt}`,
                    },
                },
            );
            
            let displayName;
            
            if (reqName.status === 200) {
                const profileData = reqName.data;
                displayName = profileData.displayName || "";
            }
            
            data.displayName = displayName;
            
            res.status(200).send(data);
        }
    } catch (e) {
        logger.error(`Error in /BSLinkAttempt! ${e}`);
        res.status(500).send("Internal server error.");
    }
});

export default router;
