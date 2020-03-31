const express = require('express');

const app = express();


/*
* Query Params: acessado por ? e o nome do campo - request.query
* Route Params: acessado somente pelo número (identifica recurso) - request.params
* Body Params: Corpo da requisição
*/
app.get('/users/:id', (request, response) =>{
    const params = request.params;
    console.log(params);

    return response.json({
        nome: 'Ian',
        sobrenome: 'Moura'
    });
});

app.listen(3333);

