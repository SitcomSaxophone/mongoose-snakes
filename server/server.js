const express = require('express');
const app = express();


const port = 5000;

app.get('/snakes', (req, res) => {
    res.send([]);
})

app.listen(port, () => {
    console.log('listening on port: ', port);
})