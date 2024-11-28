import express, { Request, Response } from "express";
import chalk from "chalk";
import path from "path";
import config from "../config/config.json" with { type: "json" };
import middleware from "./middleware/middleware.js";
import { fileURLToPath } from "node:url";

const port = config.http.port;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, () => {
    console.log(chalk.bgGreenBright(`TVii-US Main/Production is running at port ${port}`));
});

app.use(middleware);
