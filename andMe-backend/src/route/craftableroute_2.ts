import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";
import { Ingredients_Two } from "../entity/ingredients_two";
import { Inventory_Two } from "../entity/inventory_two";

const craftableRouterTwo = Express.Router()

craftableRouterTwo.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items from inventory two
craftableRouterTwo.get("/", async (req, res) => {
    try {

        const craftables2 = await appDataSource.getRepository(Craftable).createQueryBuilder("craftabletwo")
                    .leftJoinAndSelect("craftabletwo.ingredientstwo", "ingredienttwo") //add the ingredients table
                    .leftJoinAndSelect("ingredienttwo.inventorytwo", "inventorytwo")//add the inventory table to ingredients
                    .getMany()

        res.json(craftables2)

    } catch (error) {
        console.error("something went wrong")
        res.status(500).json({message: error})
    }
});

//update of recipe and inventoey info when crafted
craftableRouterTwo.put("/:id/craft", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let {amount, ingredients} = req.body;
    
        var recipeRequest = await appDataSource.getRepository(Craftable).findOneBy({id: id})
        
        if(!recipeRequest) {
          return res.status(500).json({message: "no recipe found"})
        } else {
  
          recipeRequest!.amount_crafted = amount //updates (aleardy incremented in frontend)
    
          // loop  through the ingredients and deduct the inventory amount
          await updateInventoryAmountTwo(ingredients);
    
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

const updateInventoryAmountTwo = async (IngredientsTwo: Ingredients_Two[]) => {
    // this is a try/catch loop
    try {
  
      for (var ingredienttwo of IngredientsTwo){
  
        var inventoryItem = await appDataSource.getRepository(Inventory_Two).findOneBy({id: ingredienttwo.inventorytwoId});
  
        if(!inventoryItem) {
          throw new Error(`Inventory item with ID ${ingredienttwo.inventorytwoId} not found`);
        }
        inventoryItem!.amount_avaible = ingredienttwo.inventorytwo!.amount_avaible - ingredienttwo.amount;

        console.log(inventoryItem!)
  
        await appDataSource.getRepository(Inventory_Two).save(inventoryItem!);
      }
      
    } catch (error) {
      console.log("something went wrong");
      throw error;
    }
  }

export default craftableRouterTwo;