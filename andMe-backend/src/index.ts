import express from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import AppDataSource from './dataSource';
import { Inventory_One } from './entity/inventory_one';
import { Craftable } from './entity/craftable';
import userRouter from "./route/userRoute";
import inventoryoneRouter from './route/inventoryoneroute';
import inventorytwoRouter from './route/inventorytworoute';
import inventorythreeRouter from './route/inventorythreeroute';
import craftableRouter from './route/craftableroute';
import craftableRouterTwo from './route/craftableroute_2';
import craftableRouterThree from './route/craftableroute_3';

const cors = require('cors');

const app = express();

app.use(cors())

dotenv.config()

const appDataSource = AppDataSource;

// app.get('/', (req, res) => {
//   res.send('Hello, Marine!');
// });

app.use('/inventory', inventoryoneRouter);

app.use('/inventorytwo', inventorytwoRouter);

app.use('/inventorythree', inventorythreeRouter);

app.use('/craftables', craftableRouter);

app.use('/craftablestwo', craftableRouterTwo);

app.use('/craftablesthree', craftableRouterThree);

app.use('/users', userRouter);



app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});