// Modules
import { Router } from 'express';
import { Request, Response } from 'express';

import { 
    insertEpisode,
    getEpisodes,
    getEpisodeSlog,
    deleteEpisode,
    loadIndexPage
} from './controllers';

const routes = Router();

// Routes

// template
routes.get('/', loadIndexPage);
// api 
routes.get('/episodes', getEpisodes);
routes.get('/episodes/:slog', getEpisodeSlog);
routes.post('/episode/insert', insertEpisode);
routes.get('/episode/delete/:id', deleteEpisode);

// error 404
routes.use('/', (req: Request, res: Response) => {
    return res.status(404).send({
        data: "This page not exists"
    });
});

export { routes };