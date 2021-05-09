// modules
import { Request, Response} from 'express';

// database
import { client } from '../config';

type Episodes = {
    id: string,
    slog: string,
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
    const { _limit } = req.query;

    const query = `SELECT * FROM podcast INNER JOIN files ON podcast.id = files.file ${_limit ? 'LIMIT $1' : 'LIMIT 40'} `;

    client.query(query, [_limit].filter(e => !!e), (err, data) => {
        if (err) {
            return res.status(500).send('An error was occurreded');
        }

        if (!data.rows){
            return res.status(404).send('This podcast not exists')
        }

        const episodesData = []

        for (let episode = 0; episode < data.rows.length; episode++){
            const {
                slog,
                title,
                thumbnail,
                members,
                published_at,
                description,
                url,
                type,
                duration,
            }:Episodes = data.rows[episode];

            episodesData.push({
                id: slog,
                title,
                thumbnail,
                members,
                published_at,
                description,
                file: {
                    url,
                    type,
                    duration,
                }
            })
        }

        return res.status(200).json(
            episodesData
        );
    });
}