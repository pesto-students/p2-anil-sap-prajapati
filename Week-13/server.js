const express = require("express");
const bodyParser = require('body-parser')
require("dotenv").config();
const request = require("request");

const city = require('./APIs/city')
const multiCity = require('./APIs/multiCity')
const forecast = require('./APIs/forecast')
const date = require('./APIs/date')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/city',city)
app.use('/multi',multiCity)
app.use('/forecast',forecast)
app.use('/date',date)

app.listen(4000,function(){
    console.log('Server running on port 4000')
})

