let request = require('request');


let apiKey = '2619252c602f48f1a48170110220808';
let city = 'kanpur';
let days = 4;
let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
let url1 = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.current.temp_c} degrees in ${weather.location.name}!`;
    console.log(message);
  }
});

request(url1, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
      console.log(weather);
    }
  });
  