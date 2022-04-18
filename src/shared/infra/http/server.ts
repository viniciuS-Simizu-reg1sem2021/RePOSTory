require('dotenv').config()
import 'reflect-metadata'
import mainRouter from './routes';
import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm';


const app = express();

app.use(express.json())
app.use(cors())

const port = 3333

app.listen(port, async () => {
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        synchronize: true,
        logging: false,
        entities: ['src/modules/**/infra/entity/*.ts']
    })
        .then(() => console.log('CONNECTION ESTABLISHED :D'))
        .catch(e => { console.error(`LOST CONNECTION\nERROR: ${e}`); throw new Error(e) })
});

app.use('/', mainRouter)
