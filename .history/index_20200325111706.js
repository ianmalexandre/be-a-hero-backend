const express = require('express');

const app = express();

app.get('/', (response) =>{
    return response.send('Hello World...');
});

app.listen(3333);

