const express = require('express');

const routes = express.Router();

/*
* Query Params: acessado por ? e o nome do campo - request.query
* Route Params: acessado somente pelo número (identifica recurso) - request.params
* Body Params: Corpo da requisição
*/
routes.get('/users/:id', (request, response) =>{
    const body = request.params;

    console.log(body);

    return response.json({
        nome: 'Ian',
        sobrenome: 'Moura'
    });
});
