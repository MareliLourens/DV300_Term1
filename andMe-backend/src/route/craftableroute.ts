import  Express  from "express";
import AppDataSource from "../dataSource";
import { Craftable } from "../entity/craftable";

const craftableRouter = Express.Router()

craftableRouter.use(Express.json())

const appDataSource = AppDataSource

// Get all inventory items
craftableRouter.get("/", async (req, res) => {
    try {

        const items2 = await appDataSource.getRepository(Craftable).find()

        res.json(items2)

    } catch (error) {
        console.error("Error during Data Source initialization", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

export default craftableRouter;