const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/image';

const db = mongoose.connect(mongoUri);

module.exports = db;
