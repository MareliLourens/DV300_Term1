import  Express  from "express";
import AppDataSource from "../dataSource";
import { Inventory_One } from "../entity/inventory_one";

const inventoryoneRouter = Express.Router()

inventoryoneRouter.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items
inventoryoneRouter.get("/", async (req, res) => {
    try {

        const items = await appDataSource.getRepository(Inventory_One).find()

        res.json(items)

    } catch (error) {
        console.error("Error during Data Source initialization", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

export default inventoryoneRouter;