import  Express  from "express";
import AppDataSource from "../dataSource";
import { Inventory_Two } from "../entity/inventory_two";

const inventorytwoRouter = Express.Router()

inventorytwoRouter.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items
inventorytwoRouter.get("/", async (req, res) => {
    try {

        const items1 = await appDataSource.getRepository(Inventory_Two).find()

        res.json(items1)

    } catch (error) {
        console.error("Error during Data Source initialization", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

export default inventorytwoRouter;