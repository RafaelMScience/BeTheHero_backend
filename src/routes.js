import { Router } from 'express';

import OngsController from './controllers/OngsController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);

routes.post('/ongs', OngsController.create);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

export default routes;
