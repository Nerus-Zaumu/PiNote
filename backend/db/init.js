const mongoose = require('mongoose');

const connection = (url) => {
    console.log("Connected to DB");
    return new mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
}

module.exports = connection;