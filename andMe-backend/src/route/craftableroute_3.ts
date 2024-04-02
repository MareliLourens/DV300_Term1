import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";

const craftableRouterThree = Express.Router()

craftableRouterThree.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items from inventory two
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
})

export default craftableRouterThree;