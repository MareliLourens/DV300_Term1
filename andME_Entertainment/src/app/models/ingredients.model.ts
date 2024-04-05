import { Inventory_One } from "./inventory-one.model";

export interface Ingredients {
    ingredientId: number;
    inventoryId: number;
    craftableId: number;
    amount: number;
    inventory: Inventory_One;
}
