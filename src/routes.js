import { Router } from 'express';

import OngsController from './controllers/OngsController';

const routes = new Router();

routes.get('/ongs', OngsController.index);

routes.post('/ongs', OngsController.create);

export default routes;
