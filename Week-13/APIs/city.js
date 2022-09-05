const express = require("express");
const router = express.Router()
const request = require("request");

router.post('/',(req,res)=>{

    const city = req.body.city;
    const apiKey = `${process.env.API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    request(url,(err,response,body)=>{
        if(err){
            res.send('Unable to connect to Forecast API')
        }
        else{
            const weather = JSON.parse(body)
            let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            res.send(message)
        }
    })

})

module.exports = router