const express = require('express');

const app = express();

app.use(express.json());
/*
* Query Params: acessado por ? e o nome do campo - request.query
* Route Params: acessado somente pelo número (identifica recurso) - request.params
* Body Params: Corpo da requisição
*/
app.post('/users', (request, response) =>{
    const body = request.body;

    console.log(body);

    return response.json({
        nome: 'Ian',
        sobrenome: 'Moura'
    });
});

app.listen(3333);

