const express = require('express');
const router = express.Router();
const Snake = require('../models/snake.model')

router.get('/', (req, res) => {
    Snake.find({}).then((results) => {
        console.log(results);
        res.send(results);
    }).catch((error) => {
        console.log(`error ${error}`);
        res.sendStatus(500);
    })
})

module.exports = router;