import express from "express";
import axios from "axios";
import chalk from "chalk";
import dayjs from "dayjs";

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
    console.log(
      chalk.bold.redBright(
        `[ERROR ${dayjs().format("HH:mm:ss")}] Error in /TWCodeCheck! ${e}`,
      ),
    );
    res.status(500).send("Internal server error.");
  }
});

router.put("/new", (req, res) => {
  res.send({ success: 1 }).contentType("application/json");
});

router.put("/login", (req, res) => {
  res.send({ success: 1 }).contentType("application/json");
});

router.post("/BSLinkAttempt", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
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
    console.log(
      chalk.bold.redBright(
        `[ERROR ${dayjs().format("HH:mm:ss")}] Error in /BSLinkAttempt! ${e}`,
      ),
    );
    res.status(500).send("Internal server error.");
  }
});

export default router;
