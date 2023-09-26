import { config } from "dotenv"

import express from 'express';

import apiRoutes from './routes/apiRoutes.js';

config();

const port = process.env.PORT || 8080;

const app = express();

console.log(process.env.PORT)

app.use(express.static('public'));

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('Olá Desafio uTech'))

app.listen(port,()=> console.log('listening  on http://localhost:' + port));