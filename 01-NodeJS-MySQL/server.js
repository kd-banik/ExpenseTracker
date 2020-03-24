const express = require('express'), app = express(), bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    // database: 'TASKS'
});
 
// connect to database
mc.connect();

console.log('Connection to database successful');

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./app/routes/approute'); //importing route
routes(app); //register the route