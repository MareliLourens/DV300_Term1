import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";

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

// Get all inventory items from inventory two
craftableRouter.get("/", async (req, res) => {
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
})



export default craftableRouter;