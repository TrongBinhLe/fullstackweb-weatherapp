const express = require("express");
const https = require("https");
const { response } = require("express");


const app = express();

app.get("/", (req, res) => {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric"
    https.get(url, (response) => {
        console.log(response);
    });

    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweather.org/img/wn" + icon + "@2x.png";

            res.write("<h1>The weather is currently " + weatherDescription + "</h1>");
            res.write("<h2>The temperature in London is " + temp + "degree Celcius.</h2>");
            res.write("<img src=" + imageURL + ">")
            res.send();
        })
    });
    res.send("Server is up and running")
});


app.listen(3000, () => { console.log("Server is runing on port 3000") });