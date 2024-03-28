import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";

const craftableRouter = Express.Router()

craftableRouter.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items
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
})

// craftableRouter.get("/", async (req, res) => {
//     try {

//         const items2 = await appDataSource.getRepository(Craftable).find()

//         res.json(items2)

//     } catch (error) {
//         console.error("Error during Data Source initialization", error)
//         res.status(500).json({error: "Internal Server Error"})
//     }
// })

export default craftableRouter;