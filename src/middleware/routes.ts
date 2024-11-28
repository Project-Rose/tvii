import express, { Router, Request, Response, NextFunction } from "express";
import routes from "../routes/exports.js";
import chalk from "chalk";
import dayjs from "dayjs";

const middleware = express();

interface Route {
    name: string;
    path: string;
    route: Router;
}
// Auto imports routes instead of import of bunch manually
routes.forEach((route: Route) => {
    console.warn(chalk.bold.yellowBright(`[ATTEMPT ${dayjs().format("HH:mm:ss")}] Attempting to import '${route.name}' routes at '${route.path}'...`));
    try {
        middleware.use(route.path, route.route);
        console.log(chalk.bold.greenBright(`[SUCCESS ${dayjs().format("HH:mm:ss")}] Successfully imported '${route.name}' routes at '${route.path}'!`));
    } catch (e) {
        console.error(chalk.bold.redBright(`Could not import '${route.name}' routes at '${route.path}'! ${e}`));
    };
});

export default middleware;
