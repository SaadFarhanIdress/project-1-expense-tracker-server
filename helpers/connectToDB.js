const mongoose = require('mongoose');
const dotenv = require('dotenv');

module.exports.connectionWithDB = () => {
    mongoose.connect("mongodb+srv://saadfarhan_123:saadfarhan_123@cluster0.aglon.mongodb.net/transactions?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log("404 Not Found".red.bold, err)
    });

    db.once('open', () => {
        console.log("Connection successfull....".cyan.underline.bold)
    })
}