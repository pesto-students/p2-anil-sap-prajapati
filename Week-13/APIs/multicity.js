const express = require("express");
const router = express.Router()
const request = require("request");

const { readFileSync } = require('fs');
const data = JSON.parse(readFileSync(__dirname+'/city.list.min.json'));

const apiKey = `${process.env.API_KEY}`;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

router.post('/',(req,res)=>{

    const cityNames = req.body.names;

    const cityArr = cityNames.split(',')

    let capitalizedCityName = []

    cityArr.forEach((city)=>{
        let cityCaptial = capitalizeFirstLetter(city)
        capitalizedCityName.push(cityCaptial)
    })

    let cityIds = ''

    capitalizedCityName.forEach((city)=>{
        data.forEach((cityObj)=>{
            if(cityObj['name'] === city){
                cityIds += cityObj['id']+','
            }
        })
    })

    const url = `https://api.openweathermap.org/data/2.5/group?id=${cityIds}&appid=${apiKey}&units=metric`


    request(url,(err,response,body)=>{
        if(err){
            res.send('Unable to connect to Forecast API')
        }
        else{
            const weather = JSON.parse(body)
            let response = ''

            weather['list'].forEach((cityWeather)=>{
                response += `It's ${cityWeather.main.temp} degree Celicus in ${cityWeather.name} \n`
            })
            res.send(response)
        }
    })
})

module.exports = router