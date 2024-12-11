import "reflect-metadata";
import config from "../../config/config.json" with { type: "json" };
import { DataSource } from "typeorm";
import { Account } from "./act.js";
import { Lineup } from "./lineup.js";
import { MSO } from "./mso.js";
import { Settings } from "./settings.js";
import { ParentalControls } from "./parental_controls.js";

export const AccountDatabase = new DataSource({
    type: "postgres",
    host: "db",
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: "account",
    synchronize: false,
    logging: true,
    entities: [Account],
    subscribers: [],
    migrations: [],
});

export const Database = new DataSource({
    type: "postgres",
    host: "db",
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: "tvii-dev",
    synchronize: false,
    logging: true,
    entities: [Lineup, MSO, ParentalControls, Settings],
    subscribers: [],
    migrations: [],
});
