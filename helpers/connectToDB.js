const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports.connectionWithDB = () => {
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log("404 Not Found".red.bold, err)
    });

    db.once('open', () => {
        console.log("Connection successfull....".cyan.underline.bold)
    })
}