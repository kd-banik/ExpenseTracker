let express = require("express");
let app = express();
//let mysql =  require("mysql");
const routeGet = require("./router");

app.use(express.json());
app.use(express.urlencoded());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "null");
    // res.header('Access-Control-Allow-Origin: '+(trim($_SERVER['HTTP_REFERER'], '/') ?: 'null'), true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/",routeGet);
app.listen(8000, function(err){
    if(err)
        throw(err)
    console.log("Server is running at port 8000");
});
