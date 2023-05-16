const express = require ('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const { result } = require('lodash');
const app =  express();
const blogRoute = require('./routes/blogRoute');

//connect to database mongodb
const dbURI = 'mongodb+srv://vuthy:Vuthy0112@vuthy.ifubzha.mongodb.net/Vuthy-Blog?retryWrites=true&w=majority';
mongoose.connect (dbURI , { useNewUrlParser: true, useUnifiedTopology: true })
    .then ((result) => {
        app.listen (3000);
        // console.log ('database connected successfully !');
    })
    .catch ((err) => {
        console.log (err);
    })
    //ejs view enigne
    app.set ('view engine' , 'ejs');
    // middleware and static files
    app.use (express.static('public'))
    app.use (express.urlencoded({extended : true}));
    // Morgan
    app.use (morgan('dev'));

    app.use (blogRoute);

