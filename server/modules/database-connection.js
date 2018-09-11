const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/slimy';
mongoose.connect(databaseUrl, { useNewUrlParser: true });