const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectionWithDB } = require('./helpers/connectToDB');

dotenv.config({ path: './config.env' })

app.use(bodyParser.json())
app.use(cors())


app.listen(port, (err) => {
    if (err) {
        console.log("Error", err)
        return;
    }
    console.log(`Server started on ${port} on ${new Date().toDateString()}....`.yellow.bold)
    connectionWithDB();
})