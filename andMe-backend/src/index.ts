import express from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import AppDataSource from './dataSource';
const cors = require('cors');

const app = express();

app.use(cors())

dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello, Marine!');
});

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});