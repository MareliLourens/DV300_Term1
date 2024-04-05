import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Craftable } from "./craftable";
import { Inventory_One } from "./inventory_one";


@Entity()
export class Ingredients {
    @PrimaryGeneratedColumn()
    public ingredientId!: number

    @Column()
    public inventoryId!: number

    @Column()
    public amount!: number

    @ManyToOne(() => Inventory_One, (inventory) => inventory.inventoryToCraftables)
    public inventory?: Inventory_One

    @ManyToOne(() => Craftable, (craftable) => craftable.ingredients)
    public craftable!: Craftable
}