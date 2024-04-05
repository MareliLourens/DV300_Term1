import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ingredients } from "./ingredients";
import { Ingredients_Two } from "./ingredients_two";
import { Ingredients_Three } from "./ingredients_three";

@Entity()
export class Craftable {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    amount_avaible!: number;

    @Column()
    amount_crafted!: number;

    @Column()
    category!: string;

    @Column()
    image!: string;

    @OneToMany(() => Ingredients, ingredients => ingredients.craftable)
    ingredients?: Ingredients[]

    @OneToMany(() => Ingredients_Two, ingredientstwo => ingredientstwo.craftabletwo)
    ingredientstwo?: Ingredients_Two[]

    @OneToMany(() => Ingredients_Three, ingredientsthree => ingredientsthree.craftablethree)
    ingredientsthree?: Ingredients_Three[]
}