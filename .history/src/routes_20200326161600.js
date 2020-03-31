const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

/*
* Query Params: acessado por ? e o nome do campo - request.query
* Route Params: acessado somente pelo número (identifica recurso) - request.params
* Body Params: Corpo da requisição
*/
routes.post('/users', (request, response) =>{
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4)
    console.log(body);

    return response.json();
});
