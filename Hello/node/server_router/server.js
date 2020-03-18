let express = require("express");
let app = express();
let routeGet = require("./route.js");


app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
app.use("/get",routeGet);
app.listen(8081,function(error){
 if(error)
 throw error;
 console.log("Server listening at port 8081");
});