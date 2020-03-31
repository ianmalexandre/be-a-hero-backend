const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

/*
* Query Params: acessado por ? e o nome do campo - request.query
* Route Params: acessado somente pelo número (identifica recurso) - request.params
* Body Params: Corpo da requisição
*/
routes.post('/users', (request, response) =>{
    // const {name, email, whatsapp, city, uf} = request.body;
    const body = request.body;
    //const id = crypto.randomBytes(4).toString('HEX');

    console.log(body);

    return response.json({
        nome: 'ianzera',
        apelido: 'mad dog'
    });
});

modules.export = routes;
