const express = require("express");
const router = express.Router()
const request = require("request");

router.post('/',(req,res)=>{

    const date = req.body.date;
    const city = req.body.city;
    const apiKey = `${process.env.WEATHER_API_KEY}`;

    const url = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${date}`

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