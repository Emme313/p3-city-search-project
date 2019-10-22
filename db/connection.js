const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cities');

module.exports = mongoose;