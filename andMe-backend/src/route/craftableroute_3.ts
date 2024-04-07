import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";
import { Ingredients_Three } from "../entity/ingredients_three";
import { Inventory_Three } from "../entity/inventory_three";

const craftableRouterThree = Express.Router()

craftableRouterThree.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items from inventory three
craftableRouterThree.get("/", async (req, res) => {
    try {

        const craftables3 = await appDataSource.getRepository(Craftable).createQueryBuilder("craftablethree")
                    .leftJoinAndSelect("craftablethree.ingredientsthree", "ingredientthree") //add the ingredients table
                    .leftJoinAndSelect("ingredientthree.inventorythree", "inventorythree")//add the inventory table to ingredients
                    .getMany()

        res.json(craftables3)

    } catch (error) {
        console.error("something went wrong")
        res.status(500).json({message: error})
    }
});

//update of recipe and inventoey info when crafted
craftableRouterThree.put("/:id/craft", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let {amount, ingredients} = req.body;
    
        var recipeRequest = await appDataSource.getRepository(Craftable).findOneBy({id: id})
        
        if(!recipeRequest) {
          return res.status(500).json({message: "no recipe found"})
        } else {
  
          recipeRequest!.amount_crafted = amount //updates (aleardy incremented in frontend)
    
          // loop  through the ingredients and deduct the inventory amount
          await updateInventoryAmountThree(ingredients);
    
          // save our recipe amount and return it
          var newRecipeData = await appDataSource.getRepository(Craftable).save(recipeRequest);
          console.log(newRecipeData)
          return res.json(newRecipeData);
  
        }
    
      } catch (error) {
        console.log("something went wrong" + error);
        return res.status(500).json({ message: error });
      }
});

const updateInventoryAmountThree = async (ingredientsthree: Ingredients_Three[]) => {
    // this is a try/catch loop
    try {
  
      for (var ingredientthree of ingredientsthree){
  
        var inventoryItem = await appDataSource.getRepository(Inventory_Three).findOneBy({id: ingredientthree.inventorythreeId});
  
        if(!inventoryItem) {
          throw new Error(`Inventory item with ID ${ingredientthree.inventorythreeId} not found`);
        }
        inventoryItem!.amount_avaible = ingredientthree.inventorythree!.amount_avaible - ingredientthree.amount;

        console.log(inventoryItem!)
  
        await appDataSource.getRepository(Inventory_Three).save(inventoryItem!);
      }
      
    } catch (error) {
      console.log("something went wrong");
      throw error;
    }
  }


export default craftableRouterThree;