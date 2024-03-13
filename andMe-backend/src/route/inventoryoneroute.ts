import  express  from "express";
import AppDataSource from "../dataSource";
import { Inventory_One } from "../entity/inventory_one";

const inventoryoneRouter = express.Router()

inventoryoneRouter.use(express.json())

const appDataSource = AppDataSource

// Get all inventory items
inventoryoneRouter.get("/", async (req, res) => {
    try {

        const items = await appDataSource.getRepository(Inventory_One).find()
        // const items = await appDataSource
        // .manager.find(Inventory_One)

        // console.log(items)
        res.json(items)

    } catch (error) {
        console.error("Error during Data Source initialization", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

export default inventoryoneRouter;