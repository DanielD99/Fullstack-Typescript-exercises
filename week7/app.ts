import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'});
import express = require("express");
import morgan = require('morgan');
import logger from './src/utility/logger';
import router from './src/routes/router';

// Create Express server
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}




//Set up middleware
app.use(express.json()); // Body parser for JSON data
app.use(express.urlencoded({ extended: true}));

// use the carRouter for the selected route
app.use('/api/cars/v1', router)



export default app;
