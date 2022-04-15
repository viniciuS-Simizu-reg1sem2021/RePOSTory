require('dotenv').config()
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
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

export default AppDataSource
