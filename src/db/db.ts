import "reflect-metadata";
import config from "../config/config.json" with { type: "json" };
import { DataSource } from "typeorm";
import { Account } from "./act.js";
import { Lineup } from "./lineup.js";
import { MSO } from "./mso.js";
import { Settings } from "./settings.js";
import { ParentalControls } from "./parental_controls.js";

export const Database = new DataSource({
  type: "mariadb",
  host: "db",
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: "rose",
  synchronize: false,
  logging: true,
  entities: [Account, Lineup, MSO, ParentalControls, Settings],
  subscribers: [],
  migrations: [],
});
