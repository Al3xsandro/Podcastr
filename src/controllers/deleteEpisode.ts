// modules
import { Response, Request } from 'express';
import { client } from './../config';

export default (req: Request, res: Response) => {
    const { id } = req.params;

    if(!id){
        return res.send(400).send("You should fill all fields");
    }

    client.query(``, (err) => {
        if(err){
            return res.status(500).send("This podcast not exists");
        }

        return res.status(200).send({ data: 'successfully deleted'});
    })
}