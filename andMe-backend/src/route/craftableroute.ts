import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";
import { Ingredients } from "../entity/ingredients";
import { Inventory_One } from "../entity/inventory_one";

const craftableRouter = Express.Router()

craftableRouter.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items from inventory one
craftableRouter.get("/", async (req, res) => {
    try {

        const craftables = await appDataSource.getRepository(Craftable).createQueryBuilder("craftable")
                    .leftJoinAndSelect("craftable.ingredients", "ingredient") //add the ingredients table
                    .leftJoinAndSelect("ingredient.inventory", "inventory")//add the inventory table to ingredients
                    .getMany()

        res.json(craftables)

    } catch (error) {
        console.error("something went wrong")
        res.status(500).json({message: error})
    }
});

//update of recipe and inventoey info when crafted
craftableRouter.put("/:id/craft", async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      let {amount, ingredients} = req.body;
  
      var recipeRequest = await appDataSource.getRepository(Craftable).findOneBy({id: id})
      
      if(!recipeRequest) {
        return res.status(500).json({message: "no recipe found"})
      } else {

        recipeRequest!.amount_crafted = amount //updates (aleardy incremented in frontend)
  
        // loop  through the ingredients and deduct the inventory amount
        await updateInventoryAmount(ingredients);
  
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

  const updateInventoryAmount = async (Ingredients: Ingredients[]) => {
    // this is a try/catch loop
    try {
  
      for (var ingredient of Ingredients){
  
        var inventoryItem = await appDataSource.getRepository(Inventory_One).findOneBy({id: ingredient.inventoryId});
  
        if(!inventoryItem) {
          throw new Error(`Inventory item with ID ${ingredient.inventoryId} not found`);
        }
        inventoryItem!.amount_avaible = ingredient.inventory!.amount_avaible - ingredient.amount;

        console.log(inventoryItem!)
  
        await appDataSource.getRepository(Inventory_One).save(inventoryItem!);
      }
      
    } catch (error) {
      console.log("something went wrong");
      throw error;
    }
  }
export default craftableRouter;