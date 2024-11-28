import apicache from "apicache";
import express from "express";
import chalk from "chalk";
import dayjs from "dayjs";
import config from "../config/config.json" with { type: "json" };
import middleware from "./middleware/middleware.js";

const app = express();
const port = config.http.port;

let cache = apicache.middleware;

app.use(cache("5 minutes"));

app.use(middleware);

app.listen(port, () => {
  console.log(
    chalk.bold.cyanBright(
      `[INFO ${dayjs().format("HH:mm:ss")}] Vino dev server running on: ${config.domain}/`,
    ),
  );
});
