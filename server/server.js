const express = require('express');
const app = express();
const snakeRouter = require('./routes/snake.router');

const port = 5000;

app.use('/snakes', snakeRouter);

app.listen(port, () => {
    console.log('listening on port: ', port);
})