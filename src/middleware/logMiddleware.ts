import chalk from "chalk";
import dayjs from "dayjs";
import { type Request, type Response, type NextFunction } from "express";

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const type = req.method;

    res.on("finish", () => {
        const statusCode = res.statusCode;

        switch (type) {
            case "GET":
                console.log(chalk.bold.cyanBright(`[INFO ${dayjs().format("HH:mm:ss")}] GET Request at ${req.path} - Status: ${statusCode}`));
                break;
            case "POST":
                console.log(chalk.bold.greenBright(`[INFO ${dayjs().format("HH:mm:ss")}] POST Request at ${req.path} - Status: ${statusCode}`));
                break;
            case "PUT":
                console.log(chalk.bold.blueBright(`[INFO ${dayjs().format("HH:mm:ss")}] PUT Request at ${req.path} - Status: ${statusCode}`));
                break;
            case "DELETE":
                console.log(chalk.bold.redBright(`[INFO ${dayjs().format("HH:mm:ss")}] DELETE Request at ${req.path} - Status: ${statusCode}`));
                break;
            default:
                console.log(chalk.bold.magenta(`[INFO ${dayjs().format("HH:mm:ss")}] ${type} Request at ${req.path} - Status: ${statusCode}`));
                break;
        }
    });

    next();
};