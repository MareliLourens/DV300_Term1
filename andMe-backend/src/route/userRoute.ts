import Express from "express";
import AppDataSource from "../dataSource";
import { User } from "../entity/users";

const userRouter = Express.Router()

userRouter.use(Express.json())

const appDataSource = AppDataSource

userRouter.post("/", async (req, res) => {
    try {

        const { full_name, username, phone_number, role } = req.body

        var newUser = new User()

        newUser.full_name = full_name
        newUser.username = username
        newUser.phone_number = phone_number
        newUser.role = role

        var addedUser = await appDataSource.getRepository(User).save(newUser);

        return res.json(addedUser)

    } catch (error) {
        console.log("Error occured: " + error)
        res.status(500).json({ message: error })
    }
})

userRouter.post('/login', async (req, res) => {
    try {
        const { phone_number } = req.body;
    
        if (phone_number) {
            let userRequest = await appDataSource.getRepository(User).findOneBy({ phone_number: phone_number });
    
            if (!userRequest) {
                return res.status(404).json({ message: "No User Found" });
            } else {
                if (phone_number === userRequest.phone_number) {
            
                    return res.status(200).json(userRequest);
                } else {
                    return res.status(401).json({ message: "Invalid Credentials" });
                }
            }
        }
    } catch (error) {
        console.log("Error occurred: " + error);
        res.status(500).json({ message: error });
    }
    
})

export default userRouter

function compare(phone_number: any) {
    throw new Error("Function not implemented.");
}
