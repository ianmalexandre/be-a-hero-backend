const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        nome: 'Ian',
        sobrenome: 'Moura'
    });
});

app.listen(3333);

