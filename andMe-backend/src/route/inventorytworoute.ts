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

// Update single inventory item
inventorytwoRouter.put("/:id", async (req, res) => {

    try {
        const id = parseInt(req.params.id) // id of item want to update

        const { name, main_category, image, amount } = req.body // all the values we want to update

        const inventoryItem = await appDataSource.getRepository(Inventory_Two).findOneBy({id: id})

        // see if the item exist
        if(!inventoryItem){ // if item doesn't exist respond swith 404
            res.status(404).json({message: "No Item found"})
        } else {
            //update value
            inventoryItem!.amount_avaible = amount
            //update all the vars of inventoryItem that you want

            //save the changes
            const updatedItem = await appDataSource.getRepository(Inventory_Two).save(inventoryItem!)

            res.json(updatedItem)
        }

    } catch (error) {
        console.error("Error Update inventory item", error)
        res.status(500).json({error: "Internal Server Error"})
    }

})

export default inventorytwoRouter;