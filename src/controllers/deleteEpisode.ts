// modules
import { Response, Request } from 'express';
import { client } from './../config';

export default (req: Request, res: Response) => {
    client.query(``, (err) => {
        if(err){
            return res.status(500).send({
                data: "This podcast not exists"
            })
        }
    })
}