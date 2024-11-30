import chalk from "chalk";
import dayjs from "dayjs";
import util from "util";

export const logger = {
    log: function (msg: string, ...args: any[]) {
        console.log(chalk.bold.blueBright(`[LOG ${dayjs().format("HH:mm:ss")}] ${util.format(msg, ...args)}`));
    },
    info: function (msg: string, ...args: any[]) {
        console.log(chalk.bold.cyanBright(`[INFO ${dayjs().format("HH:mm:ss")}] ${util.format(msg, ...args)}`));
    },
    success: function (msg: string, ...args: any[]) {
        console.log(chalk.bold.greenBright(`[SUCCESS ${dayjs().format("HH:mm:ss")}] ${util.format(msg, ...args)}`));
    },
    error: function (msg: string, ...args: any[]) {
        console.log(chalk.bold.redBright(`[ERROR ${dayjs().format("HH:mm:ss")}] ${util.format(msg, ...args)}`));
    },
    warn: function (msg: string, ...args: any[]) {
        console.log(chalk.bold.yellowBright(`[WARN ${dayjs().format("HH:mm:ss")}] ${util.format(msg, ...args)}`));
    },
    attempt: function (msg: string, ...args: any[]) {
        console.log(chalk.bold.yellowBright(`[ATTEMPT ${dayjs().format("HH:mm:ss")}] ${util.format(msg, ...args)}`));
    },
};