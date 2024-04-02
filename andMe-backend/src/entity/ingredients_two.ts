import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Craftable } from "./craftable";
import { Inventory_Two } from "./inventory_two";

@Entity()
export class Ingredients_Two {
    @PrimaryGeneratedColumn()
    public ingredientId!: number

    @Column()
    public inventorytwoId!: number

    @Column()
    public amount!: number

    @ManyToOne(() => Inventory_Two, (inventorytwo) => inventorytwo.inventoryToCraftablestwo)
    public inventorytwo?: Inventory_Two

    @ManyToOne(() => Craftable, (craftabletwo) => craftabletwo.ingredientstwo)
    public craftabletwo?: Craftable
}