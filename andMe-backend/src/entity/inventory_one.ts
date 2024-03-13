import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory_One {
    @PrimaryGeneratedColumn()
    id!: number 

    @Column()
    name!: string 

    @Column()
    amount_avaible!: number 

    @Column()
    main_category!: string

    @Column()
    sub_category!: string

    @Column()
    image!: string
}