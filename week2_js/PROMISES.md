### CALLBACK & PROMISES

1) Let's start with a simple callback example to warm up:

```JS
function calculate(x, y, operation) {
    return operation(x, y);
}
```

```JS
function add(x, y) {
    return x + y;
}
```

The above function is our overall calculator. Right now it only supports addition, that makes that calculator pretty
useless.
Let's add some more operations by adding some more functions:

    - subtraction
    - multiplication
    - division

call the function calculate with the appropriate parameters to test your code.

3) Great!! Now that we are warmed up, let's try to make a litte weather app that will get the user's location and then
   get the
   weather for that location

- a) Create a new folder called weather-app and create a new file called weather.js

- b) Inside the weather folder create a new node project with the following command:

```BASH
npm init - y
```

- c) We will need to use the following npm packages:
   - npm install node-navigator
   - npm install xmlhttprequest
   - npm install lite-server
   - in package.json add the following line to the scripts object:
     "start": "lite-server weather.js"

- d) First we need to get the user's location:

```JS

const {Navigator} = require("node-navigator");
const navigator = new Navigator();

function getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        callback(position.coords);
    });
}
```

 - Now we need to get the weather for that location:

**Go to [openweathermap.org](openweathermap.org) and create an account to get an API key**

```JS
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeather(coords, callback) {
    const apiKey = "YOUR KEY HERE";
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status == 200) {
            callback(JSON.parse(req.response));
        } else {
            callback('Error');
        }
    };
    req.send();
}
```

- Now let's call the functions:

```JS
getLocation(function (coords) {
    getWeather(coords, function (weather) {
        console.log(weather);
    });
});
```

- e) Your assignment is now to make the above code more readable and understandable. You can do this by using promises.
Both functions above needs to return a promise. You can use the following code as a starting point:

```JS
function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position);
            });
        } catch (e) {
            reject(e);
        }
    });
}
```

The getWeather function you need to create yourself.

- f) Now call both functions and log the weather to the console using the .then() and .catch() methods.

- g) Now I want you to make the code even more readable by using async/await. You can use the following code as a
   starting point:

```JS
async function getWeather() {
    try {
    // your code here
    } catch (e) {
    // your code here
    }
}
```

4) Weather APP

- a) Now that you have the weather, you can display it to the user. Create a new file called index.html and add the
   following code:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
</head>
<body>
<h1>Weather App</h1>
<div id="weather"></div>
<script src="weather.js"></script>
</body>
</html>
```

- b) Now add the following code to the weather.js file:

```JS
document.getElementById('weather').innerHTML = weather.main.temp;
```


- c) Now run the following command to start a local server:

```BASH 
npm start
```

- d) Now open your browser and go to localhost:3000, and you should see the temperature of your location.

## WARNING:

You may get an error message in your browser console saying that require is not defined. Why do you think that is ??
Think about it for a minute and then read on.



The problem that arises here is that the browser doesn't know what require is. To fix this you need to change the following to the weather.js file:

- delete the following lines:

```JS
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const {Navigator} = require("node-navigator");
```

and change the following line in getLocation():

```JS
// the change below has noting to do with the require problem, it is the way the position object is structured
// FROM
resolve(position);
//TO
resolve(position.coords);
``` 

Now it should work in the browser. (HOPEFULLY!!)

- e) Now that you have the temperature, you can add some more information to the page. Add the following code to the
   weather.js file:

```JS
document.getElementById('weather').innerHTML = weather.main.temp + ' ' + weather.weather[0].description;
```


- f) Now add some styling to the page. Add the following code to the index.html file:

```HTML 
<style>
    body {
        background-color: #f2f2f2;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        text-align: center;
        color: #333;
    }

    #weather {
        width: 300px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>
```

Feel free to add more functionality to the app. For example, you can add a background image that changes depending on the weather.










