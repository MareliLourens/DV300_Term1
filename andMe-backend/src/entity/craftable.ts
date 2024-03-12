import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Craftable {
    @PrimaryGeneratedColumn()
    id!: number 

    @Column()
    name!: string 

    @Column()
    amount_avaible!: number 

    @Column()
    amount_crafted!: string

    @Column()
    category!: string

    @Column()
    image!: string
}