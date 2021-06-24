const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const app = express();
const { connectionWithDB } = require('./helpers/connectToDB');

dotenv.config({ path: './config.env' })



app.listen(port, (err) => {
    if (err) {
        console.log("Error", err)
        return;
    }
    console.log(`Server started on ${port} on ${new Date().toDateString()}....`.yellow.bold)
    connectionWithDB();
})