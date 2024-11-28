import express from "express";
import path from "path";
import routes from "./routes.js";
import access from "./access.js"
import { fileURLToPath } from "url";

const middleware = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

middleware.use(express.json());
middleware.use(access);
middleware.use(routes);
middleware.use(express.static(path.join(__dirname, "..", "..", "src", "public")));

export default middleware;