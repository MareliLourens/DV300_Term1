import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ingredients } from "./ingredients";

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

    @OneToMany(() => Ingredients, ingredients => ingredients.craftable)
    ingredients?: Ingredients[]
}