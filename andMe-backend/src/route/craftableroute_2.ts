import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";

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
})

export default craftableRouterTwo;