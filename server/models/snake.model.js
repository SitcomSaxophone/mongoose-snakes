const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const snakeSchema = new Schema ({
    species: {type: String, required: true, unique: true},
    venomous: {type: Boolean, required: true}
})

module.exports = mongoose.model('snakes', snakeSchema);
