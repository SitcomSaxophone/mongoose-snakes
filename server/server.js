const express = require('express');
const app = express();


const port = 5000;

app.get('/snakes', (req, res) => {
    console.log('ssssssss');
})

app.listen(port, () => {
    console.log('listening on port: ', port);
})