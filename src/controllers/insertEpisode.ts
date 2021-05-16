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
        title,
        members,
        thumbnail,
        description,
        url,
        type,
        duration
    }:Episodes = req.body;

    const published_at = new Date()

    if (
    !title.trim() 
    || !members.trim() 
    || !thumbnail.trim() 
    || !description.trim() 
    || !url.trim() 
    || !type.trim() 
    || !duration
    ) {
        return res.status(500).send('You should fill all fields');
    }

    const slog = title.replace(/ +/g, '-').toLowerCase();

    client.query(`INSERT INTO podcast (
        title,
        members,
        thumbnail,
        description,
        published_at, 
        slog,
        url,
        type,
        duration
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [
        title,
        members,
        thumbnail,
        description,
        published_at,
        slog,
        url,
        type,
        duration
    ], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).send('An error was occurreded');
        }

        return res.status(200).send({
            title,
            members,
            thumbnail,
            description,
            published_at,
            file: {
                url,
                type,
                duration
            }
        });
    })
}