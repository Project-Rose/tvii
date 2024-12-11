import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MSO {
    @PrimaryColumn({type: "int", unsigned: true})
    mso_id: number;

    @Column({ type: "varchar", length: 45 })
    mso_name: string;
}
