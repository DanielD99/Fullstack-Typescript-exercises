import * as dotenv from 'dotenv';
dotenv.config();

import express = require('express');
const app = express();

//home
app.get('/', (req, res) => {
    const homePage = `
    <html>
      <head>
        <title>My Express App</title>
      </head>
      <body>
        <h1>Welcome to the Home Page!</h1>
        <p>Click on the links below to navigate to other routes:</p>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/logger">Logger</a></li>
          <li><a href="/data">Data</a></li>
          <li><a href="/date">Date</a></li>
        </ul>
      </body>
    </html>
  `;
  res.send(homePage);
  });
  
  //about
  app.get('/about', (req, res) => {
    res.send('This is the About page.');
  });
  
  app.get('/logger', (req, res) => {
    res.send('Logging page');
  });
  
  app.get('/data', (req, res) => {
    res.send('Data page');
  });
  
  app.get('/date', (req, res) => {
    const currentDate = new Date().toDateString();
    res.send(`Current date is: ${currentDate}`);
  });




app.listen(dotenv.config, () => {
   console.log(`Server is listening to http://localhost:3000`);
});
