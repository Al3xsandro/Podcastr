import { Request, Response } from 'express';
import { client } from '../config';

type Episodes = {
    id: string,
    slog,
    title: string;
    published_at: number;
}

const views = __dirname + '/../views/';

export default (req: Request, res: Response) => {
    client.query(`SELECT * FROM podcast LIMIT 50`, (err, data) => {
        if(err){
            return res.status(500).send("An error was occurred");
        }

        const episode = [];

        for(let episodes = 0; episodes < data.rows.length; episodes++){
            const {
                id,
                slog,
                title,
                published_at
            }:Episodes = data.rows[episodes]

            episode.push({
                id,
                slog,
                title,
                published_at
            })
        };

        return res.render(views + 'index', { episode })
    });
};