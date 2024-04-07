import { IngredientsThree } from "./ingredients-three.model";
import { IngredientsTwo } from "./ingredients-two.model";
import { Ingredients } from "./ingredients.model"


export interface Craftable {
    id?: number;
    name: string; 
    amount_avaible: number; 
    amount_crafted: number;
    category: string;
    image: string;
    ingredients?: Ingredients[];
    ingredientstwo?: IngredientsTwo[];
    ingredientsthree?: IngredientsThree[];
    isCraftable?: boolean //frontend
}
