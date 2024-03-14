import  Express  from "express";
import AppDataSource from "../dataSource";
import { Inventory_Three } from "../entity/inventory_three";

const inventorythreeRouter = Express.Router()

inventorythreeRouter.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items
inventorythreeRouter.get("/", async (req, res) => {
    try {

        const items2 = await appDataSource.getRepository(Inventory_Three).find()

        res.json(items2)

    } catch (error) {
        console.error("Error during Data Source initialization", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

export default inventorythreeRouter;