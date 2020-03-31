const express = require('express');

const app = express();

app.get('/users/', (request, response) =>{
    const param = request.query;
    console.log(param);

    return response.json({
        nome: 'Ian',
        sobrenome: 'Moura'
    });
});

app.listen(3333);

