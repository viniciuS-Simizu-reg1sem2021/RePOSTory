import 'reflect-metadata'
import { createConnection, DataSource } from 'typeorm'
import mainRouter from './routes';
import express from 'express'
import cors from 'cors'
import AppDataSource from './AppDataSource';


const app = express();

app.use(express.json())
app.use(cors())

const port = 3333

app.listen(port, async () => {
    await AppDataSource.initialize()
        .then(() => console.log('CONNECTION STABLISHED'))
        .catch((e) => console.error('ERROR: Connection NOT stablished!', e))
        
    console.log(`Server running on port ${port}`)
});

app.use('/', mainRouter)
