import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    account_id: number;

    @CreateDateColumn({ type: "datetime" })
    creation_datetime: Date;

    @Column({ type: "varchar", length: 45 })
    email: string;

    @Column({ type: "text" })
    password: string;

    @Column({ type: "bit", default: 1 })
    environment: number;

    @Column({ type: "bit", default: 1 })
    permission_level: number;

    @Column({ type: "varchar", length: 10 })
    mii_name: string;

    @Column({ type: "int" })
    pid: number;

    @Column({ type: "varchar", length: 16 })
    pnid: string;

    @UpdateDateColumn({ type: "datetime" })
    last_login_datetime: Date;
}
