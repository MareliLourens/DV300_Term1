import express from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import AppDataSource from './dataSource';
import { Inventory_One } from './entity/inventory_one';
import { Craftable } from './entity/craftable';
import { User } from './entity/users';
import inventoryoneRouter from './route/inventoryoneroute';

const cors = require('cors');

const app = express();

app.use(cors())

dotenv.config()

const appDataSource = AppDataSource;

app.get('/', (req, res) => {
  res.send('Hello, Marine!');
});

// app.get('/crafts', async (req, res) => {
//   const craft = await appDataSource.getRepository(Craftable).find()
//   // .manager.find(Craftable)

//   console.log(craft)
//   res.send(craft)
// })

app.use('/inventory', inventoryoneRouter);

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});