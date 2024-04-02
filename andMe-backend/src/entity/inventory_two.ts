import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ingredients_Two } from "./ingredients_two";

@Entity()
export class Inventory_Two {
    @PrimaryGeneratedColumn()
    id!: number 

    @Column()
    name!: string;

    @Column()
    amount_avaible!: number;

    @Column()
    main_category!: string;

    @Column()
    sub_category!: string;

    @Column()
    image!: string;

    @OneToMany(() => Ingredients_Two, ingredientstwo => ingredientstwo.inventorytwo)
    public inventoryToCraftablestwo?: Ingredients_Two[];
}