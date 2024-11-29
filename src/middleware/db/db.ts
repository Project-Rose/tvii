import "reflect-metadata";
import { DataSource } from "typeorm";

import config from "../../../config/config.json" with { type: "json" };

export const Database = new DataSource({
    type: "mariadb",
    host: "db",
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: "rose",
    synchronize: true,
    logging: true,
    entities: ["./act.ts", "provider.ts"],
    subscribers: [],
    migrations: [],
});
