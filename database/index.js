const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/image';

const db = mongoose.connect(mongoUri);

module.exports = db;
