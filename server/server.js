const express = require("express");
const submitRoute = require("./route/submit")
const app = express();
app.use(express.json());
app.use(express.urlencoded({"extended" : false}));
app.use(function (request,response,next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/submit",submitRoute)
app.listen(3000,function(error){
    if(error){
        throw error;
    }
    console.log("server running successfully....");
});
