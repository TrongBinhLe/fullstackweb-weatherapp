const express = require("express");
const https = require("https");
const { response } = require("express");


const app = express();

app.get("/", (req, res) => {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric"
    https.get(url, (response) => {
        console.log(response);
    });
    res.send("Server is up and running")
});


app.listen(3000, () => { console.log("Server is runing on port 3000") });