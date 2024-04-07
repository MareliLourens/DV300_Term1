import Express from "express";
import AppDataSource from "../dataSource";
import { User } from "../entity/users";
import * as bcrypt from 'bcrypt';

const userRouter = Express.Router()

userRouter.use(Express.json())

const appDataSource = AppDataSource

userRouter.post("/", async (req, res) => {
    try {

        const { full_name, username, phone_number, unique_question, unique_answer } = req.body

        var newUser = new User()

        newUser.full_name = full_name
        newUser.username = username
        newUser.phone_number = phone_number
        newUser.unique_question = unique_question
        newUser.unique_answer = unique_answer

        var addedUser = await appDataSource.getRepository(User).save(newUser);

        return res.json(addedUser)

    } catch (error) {
        console.log("Error occured: " + error)
        res.status(500).json({ message: error })
    }
})

userRouter.post('/login', async (req, res) => {
    try {
        const { phone_number, unique_answer } = req.body;

        if (phone_number && unique_answer) {
            let userRequest = await appDataSource.getRepository(User).findOneBy({ phone_number: phone_number });

            if (!userRequest) {
                return res.status(404).json({ message: "No User Found" });
            } else {
                bcrypt.compare(unique_answer, userRequest.unique_answer, (error, result) => {
                    if (result) { 
                        userRequest!.unique_answer = ""
                        return res.json(userRequest);
                    } else {
                        res.status(500).json({ message: 'Invalid Credentials' });
                    }
                });
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