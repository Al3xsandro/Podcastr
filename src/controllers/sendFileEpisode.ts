// modules
import { Request, Response} from 'express';

// database
import { client } from '../config';

type Episodes = {
    id: string,
    title: string;
    thumbnail: string;
    members: string;
    published_at: number;
    description: string;
    url: string;
    type: string;
    duration: number;
}

export default (req: Request, res: Response) => {
    const {
        id,
        url,
        type,
        duration
    }: Episodes = req.body;

    if (!id || !url.trim() || !type.trim() || !duration){
        return res.status(500).send("You should fill all fields");
    }

    client.query(`INSERT INTO files (file, url, type, duration) VALUES ($1, $2, $3, $4)`, [
        id,
        url,
        type,
        duration
    ], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).send("An error was occurred");
        }

        return res.status(200).send({data:"success"});
    });
}