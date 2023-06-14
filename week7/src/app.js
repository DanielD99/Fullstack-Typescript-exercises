"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const router_1 = __importDefault(require("./routes/router"));
// Create Express server
const app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log("Development mode...");
}
//Set up middleware
app.use(express.json()); // Body parser for JSON data
app.use(express.urlencoded({ extended: true }));
// use the carRouter for the selected route
app.use('/api/cars/v1', router_1.default);
exports.default = app;
