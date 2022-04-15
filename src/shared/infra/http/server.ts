import { createConnection } from 'typeorm'
import mainRouter from './routes';
import express from 'express'
import cors from 'cors'


const app = express();

app.use(express.json())
app.use(cors())

const port = 3333

app.listen(port, async () => {
    await createConnection({
        name: 'Database Connection',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    })
    console.log(`Server running on port ${port}`)
});

app.use('/', mainRouter)
