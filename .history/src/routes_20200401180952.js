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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),  incidentController.delete);

module.exports = routes;
