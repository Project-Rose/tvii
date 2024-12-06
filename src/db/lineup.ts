import { Column, Entity, PrimaryColumn } from "typeorm";
import { ManyToOne } from "typeorm/browser";
import { MSO } from "./mso.js";
import { JoinColumn } from "typeorm/browser";

@Entity()
export class Lineup {
    @PrimaryColumn({type: "varchar", length: 20})
    lineup_id: string;

    @Column({ type: "varchar", length: 20 })
    lineup_name: string;

    @Column({ type: "varchar", length: 15 })
    lineup_type: string;

    @ManyToOne(() => MSO)
    @JoinColumn({ name: "mso_id" })
    mso: MSO
}
