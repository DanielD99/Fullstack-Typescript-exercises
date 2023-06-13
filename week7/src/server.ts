import express from 'express';
import mongoose from 'mongoose';
import app from '../app';

const PORT = process.env.PORT;

//connect to db
mongoose
.connect('my future db goes here')
    .then(()=>{
        console.log('Connected to the database');
        // start server
        app.listen(PORT, ()=>{
            console.log(' server started on port ${PORT}');
        })
    })
    .catch((error)=> {
        console.error('failed to connect to db', error);
    });
