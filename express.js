let express = require("express");
let router = express.Router();
let mysql = require("mysql");
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
const config = require("./config");
//const { check, validationResult } = require('./validation');
let app = express();


// Get all the values from database
router.post("/login", function (request, response, next) {
    //response.writeHead(200, { "contentType": "json" });
    console.log(request.body);
    mysqlConnection = mysql.createConnection({
        host: config.Host,
        user: config.User,
        password: config.Password,
        database: config.Database,
        port: config.Port
    });

    mysqlConnection.connect(function (error) {
        if (error)
            throw error;
        console.log("connection created sucessfully");
    });
    
    sql = "SELECT * FROM registration WHERE email = '" + request.body.e_mail + "' AND password = '" + request.body.pword +"' ";
    mysqlConnection.query(sql, function (error, result, fields) {
        console.log(result)
        if (result.length > 0) {
                request.session.loggedin = true;
                request.session.username = request.body.e_mail;
                console.log('Wellcome! login sucessful');
               //response.redirect('/');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
});

//Save form data into database
router.post('/submit', function (req, res) {
    console.log(req.body);
    mysqlConnection = mysql.createConnection({
        host: config.Host,
        user: config.User,
        password: config.Password,
        database: config.Database,
        port: config.Port
    });

    mysqlConnection.connect(function (error) {
        if (error)
            throw error;
        console.log("connection created sucessfully");
    });
    var sql = "INSERT INTO  registration VALUES ( '" + req.body.empID + "', '" + req.body.fname + "', '" + req.body.lname + "' , '" + req.body.email + "' , '" + req.body.designation + "'  , '" + req.body.password + "' , '" + req.body.password1 + "')";
    mysqlConnection.query(sql, function (err) {
        if (err) {throw err;}
        console.log("Record inserted Successfully");
       
    });
    //res.send({ status: 200, message: 'success' });
    mysqlConnection.end(function (error) {
        if (error)
            throw error;
        console.log("Ending connection");
    });

});

module.exports = router;
