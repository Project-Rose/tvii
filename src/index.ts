import express from "express";
import path from "path";
import { access } from "./middleware/access.js";
import { logMiddleware } from "./middleware/logMiddleware.js";
import { fileURLToPath } from "url";
import { exports } from "./routes/exports.js";
import { logger } from "./utils/logger.js";
import config from "../config/config.json" with { type: "json" };

const app = express();
const port = config.http.port;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(logMiddleware);
app.use(access);
app.use(express.static(path.join(__dirname, "..", "src", "public")));

// Auto imports routes instead of import of bunch manually
for (let i = 0; i < exports.length; i++) {
    const route = exports[i];
    logger.attempt(`Attempting to import '${route.name}' routes at '${route.path}'...`);
    try {
        app.use(route.path, route.route);
        logger.success(`Successfully imported '${route.name}' routes at '${route.path}'!`);
    } catch (e) {
        logger.error(`Could not import '${route.name}' routes at '${route.path}'! ${e}`);
    }
}

app.listen(port, () => {
    logger.info(`Vino dev server running on: ${config.domain}/`);
});
