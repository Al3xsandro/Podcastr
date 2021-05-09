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
    const { slog } = req.params;

    const query = `SELECT * FROM podcast INNER JOIN files ON podcast.id = files.file WHERE slog=($1)`;

    client.query(query, [slog].filter(e => !!e), (err, data) => {
        if(err){
            return res.status(500).send('An error was occurred');
        }

        if (!data.rows[0]){
            return res.status(404).send('This podcast not exists')
        }

        const {
            title,
            thumbnail,
            members,
            published_at,
            description,
            url,
            type,
            duration,
        }: Episodes = data.rows[0]

        return res.status(200).json([{
            id: slog,
            title,
            thumbnail,
            members,
            published_at,
            description,
            file: {
                url,
                type,
                duration
            }
        }]);
    });
}