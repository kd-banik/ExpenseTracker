const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT||3000;

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'dbOne',
    port: 3306
});

conn.connect(); //database connect

app.listen(port);
console.log('API supposedly started on port '+port);

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

let route = require('./apps/router/appRouter'); //import route
route(app); //register route
// app.use('/', route);