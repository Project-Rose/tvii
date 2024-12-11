import express from "express";
import axios from "axios";
import chalk from "chalk";
import dayjs from "dayjs";
import bcrypt from "bcrypt-updated";
import { AccountDatabase } from "../../db/db.js";
import { Account } from "../../db/act.js";
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
    const dt = new Date();

    AccountDatabase.initialize()
        .then(async () => {
            const accountRepository = AccountDatabase.getRepository(Account);

            // Check if account exists
            const exists = await accountRepository.findOneBy({
                email: data.email,
                pid: data.pid,
            });

            // FIXME: is this the proper way to handle it?
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

                res.send({ success: 1 });
            }
        })
        .catch(async (e) => {
            console.log(e);
            res.send({ success: 0 });
        })
        .finally(() => {
            AccountDatabase.destroy(); // we are done, don't leave it open
        });
});

router.put("/login", async (req, res) => {
    const data = await req.body;
    AccountDatabase.initialize()
        .then(async () => {
            const accountRepository = AccountDatabase.getRepository(Account);

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
            AccountDatabase.destroy(); // we are done, don't leave it open
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
