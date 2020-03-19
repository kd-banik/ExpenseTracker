let express = require("express");
let router = express.Router();
let mysql = require("mysql");
const config = require("./config");
let app = express();


// Get all the values from database
router.get("/login", function (request, response, next) {
    response.writeHead(200, { "contentType": "json" });
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
    sql = "SELECT * FROM registration";
    mysqlConnection.query(sql, function (error, result, fields) {
        if (error)
            throw error;
        console.log("query executed");
        response.end(JSON.stringify(result));
        console.log(result);
        // mysqlConnection.end(function (error) {
        //     if (error)
        //         throw error;
        //     console.log("Ending connection");
        // });
    })
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
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
    mysqlConnection.end(function (error) {
        if (error)
            throw error;
        console.log("Ending connection");
    });
   // window.location.href = "../index.html";
    res.redirect('/login');
});

module.exports = router;
