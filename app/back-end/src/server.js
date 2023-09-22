import { config } from "dotenv"

import express from 'express';

config();

const port = process.env.PORT || 8080;

const app = express();

console.log(process.env.PORT)

app.get('/', (req, res) => res.send('Olá Desafio uTech'))

app.listen(port,()=> console.log('listening  on http://localhost:' + port));