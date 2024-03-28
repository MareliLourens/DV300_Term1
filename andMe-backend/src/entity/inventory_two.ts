import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ingredients } from "./ingredients";

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

    @OneToMany(() => Ingredients, ingredients => ingredients.inventory)
    public inventoryToCraftablestwo?: Ingredients[];
}