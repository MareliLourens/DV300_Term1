import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number 

    @Column()
    full_name!: string 

    @Column()
    username!: string 

    @Column()
    phone_number!: number

    @Column()
    role!: string
}