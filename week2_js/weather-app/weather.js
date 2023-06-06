function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
}


function getWeather(coords) {
    return new Promise(function (resolve, reject) {
        try{
    const apiKey = "da26600438e34b0a71f948b4cb38df8b";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();

    req.open('GET', url);
    req.onload = function () {
        if (req.status === 200) {
            resolve(JSON.parse(req.response));
        } else {
            reject(new Error(req.statusText));
        }
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
      document.getElementById('weather').innerHTML = weather.main.temp + ' ' + weather.weather[0].description;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  

  weather()