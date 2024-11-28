import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn()
    provider_id: number;
    
    // This data from here on matches with zap2it
    @Column({ type: "varchar", length: 45 })
    provider_headend_device: string;
    
    @Column({ type: "varchar", length: 45 })
    provider_headend_id: string;
    
    @Column({ type: "varchar", length: 45 })
    provider_headend_type: string;
    
    @Column({ type: "varchar", length: 45 })
    provider_lineup_id: string;
    
    @Column({ type: "varchar", length: 45 })
    provider_location: string;
    
    @Column({ type: "varchar", length: 10 })
    provider_zipcode: string;
}