import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Account } from "./act.js";

@Entity()
export class ParentalControls {
  @PrimaryColumn()
  account_id: number;

  @OneToOne(() => Account)
  @JoinColumn({ name: "account_id" })
  account: Account;

  // stored as arrays (in a string)
  @Column({ type: "varchar", length: 100 })
  allowed_tv_ratings_array: string;

  @Column({ type: "varchar", length: 100 })
  allowed_movie_ratings_array: string;
}
