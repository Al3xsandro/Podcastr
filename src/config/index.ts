import * as dotenv from 'dotenv';
import { Client } from 'pg'; 

dotenv.config()

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 5432,
})

client.connect()

export { client };