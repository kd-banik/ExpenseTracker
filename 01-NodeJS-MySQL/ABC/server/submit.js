const express = require('express'),
app = express.Router();

app.post('/login', function (req, res, next) {
   console.log('login'); 
});

app.post('/user_details', function (req, res, next) {
    console.log('registration');
});