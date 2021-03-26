const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({"message": "Working..."})
});

app.get('/products', (req, res) => {
    res.json({"message": "Products..."})
});

const SERVER = app.listen('3333', '127.0.0.1', 
    () => {
        console.log('Working...')
    }
);