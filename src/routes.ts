// Modules
import { Router } from 'express';
import { Request, Response } from 'express';

import { 
    insertEpisode,
    getEpisodes,
    getEpisodeSlog,
    sendFileEpisode 
} from './controllers';

const routes = Router();
const views = __dirname + '/views/';

// Routes

// template
routes.get('/', (req: Request, res: Response) => {
    res.render(views + 'index') 
});

// api 

routes.get('/episodes', getEpisodes);
routes.get('/episodes/:slog', getEpisodeSlog);
routes.post('/episodes/insert', insertEpisode);
routes.post('/episodes/insert/file', sendFileEpisode);

// error 404
routes.use('/', (req: Request, res: Response) => {
    return res.status(404).send({
        data: "This page not exists"
    });
});

export { routes };