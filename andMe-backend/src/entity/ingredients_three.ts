import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Craftable } from "./craftable";
import { Inventory_Three } from "./inventory_three";

@Entity()
export class Ingredients_Three {
    @PrimaryGeneratedColumn()
    public ingredientId!: number

    @Column()
    public inventorythreeId!: number

    @Column()
    public amount!: number

    @ManyToOne(() => Inventory_Three, (inventorythree) => inventorythree.inventoryToCraftablesthree)
    public inventorythree?: Inventory_Three

    @ManyToOne(() => Craftable, (craftablethree) => craftablethree.ingredientsthree)
    public craftablethree?: Craftable
}