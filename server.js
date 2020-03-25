let express = require("express");
let app = express();
//let mysql =  require("mysql");
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
const routeGet = require("./express");
const valid = require("./validation")

app.use(express.json());
app.use(express.urlencoded());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "null");
    // res.header('Access-Control-Allow-Origin: '+(trim($_SERVER['HTTP_REFERER'], '/') ?: 'null'), true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(8000, function(err){
    if(err)
        throw(err)
    console.log("Server is running at port 8000");
});
app.use("/",valid,routeGet);
