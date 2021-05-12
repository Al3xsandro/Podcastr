// modules
import { Response, Request } from 'express';
import { client } from './../config';

export default (req: Request, res: Response) => {
    const { id } = req.params;

    if(!id){
        return res.send(500).send("You should fill all fields")
    }

    client.query(``, (err) => {
        if(err){
            return res.status(500).send({
                data: "This podcast not exists"
            })
        }
    })
}