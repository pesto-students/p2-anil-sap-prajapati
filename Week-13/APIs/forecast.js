const express = require("express");
const router = express.Router()
const request = require("request");

router.post('/',(req,res)=>{

    const days = req.body.days;
    const city = req.body.city;
    const apiKey = `${process.env.WEATHER_API_KEY}`;

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`

    request(url,(err,response,body)=>{
        if(err){
            res.send('Unable to connect to Forecast API')
        }
        else{
            const weather = JSON.parse(body)
            res.json(weather.forecast)
        }
    })

})

module.exports = router