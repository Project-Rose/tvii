import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Account } from "./act.js";
import { Lineup } from "./lineup.js";

@Entity()
export class Settings {
  @PrimaryColumn()
  account_id: number;

  @OneToOne(() => Account)
  @JoinColumn({ name: "account_id" })
  account: Account;

  @OneToOne(() => Lineup)
  @JoinColumn({ name: "lineup_id" })
  lineup: Lineup;

  @Column({ type: "varchar", length: 11 })
  zip_code: string;

  // TODO: technically can we store it in the ORM as an array
  @Column({ type: "varchar", length: 100 })
  streaming_providers_array: string;
}
