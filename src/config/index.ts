import * as dotenv from 'dotenv';
import { Client } from 'pg'; 

dotenv.config()

const client = new Client({
    connectionString: process.env.CONNECTION_STRING
})

client.connect()

export { client };