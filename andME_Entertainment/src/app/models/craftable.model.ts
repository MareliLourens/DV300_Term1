import { Ingredients } from "./ingredients.model"


export interface Craftable {
    id?: number;
    name: string; 
    amount_avaible: number; 
    amount_crafted: number;
    category: string;
    image: string;
    ingredients?: Ingredients[];
    isCraftable?: boolean //frontend
}
