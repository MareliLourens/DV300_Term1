import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ingredients } from "./ingredients";
import { Ingredients_Three } from "./ingredients_three";

@Entity()
export class Inventory_Three {
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

    @OneToMany(() => Ingredients_Three, ingredientsthree => ingredientsthree.inventorythree)
    public inventoryToCraftablesthree?: Ingredients_Three[];
}