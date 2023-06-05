
const {Navigator} = require("node-navigator");
const navigator = new Navigator();

function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position);
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeather(coords) {
    return new Promise(function (resolve, reject) {
        try{
    const apiKey = "da26600438e34b0a71f948b4cb38df8b";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();

    req.open('GET', url);
    req.onload = function () {
        if (req.status === 200) {
            resolve(JSON.parse(req.responseText));
        } else {
            reject(new Error(req.statusText));
        }
    };
    req.onerror = function () {
        reject(new Error("Network error"));
      };
    req.send();
} catch(e){
    reject(new Error(e));
}

    });
}

async function weather() {
    try {
      const coords = await getLocation();
      const weather = await getWeather(coords);
      console.log(weather);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  weather();