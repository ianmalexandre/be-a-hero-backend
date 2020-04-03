const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileControlller');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();
/*
* Query Params: acessado por ? e o nome do campo - request.query
* Route Params: acessado somente pelo número (identifica recurso) - request.params
* Body Params: Corpo da requisição
*/

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;
