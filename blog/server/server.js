const express = require("express");
const app = express();
const routes = require("./router/router");
const routes2 = require("./server/routes/route_index");
app.use(express.json());
app.use(express.urlencoded({"extended":false}));
app.use(function(request,response,next){
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/blog",routes.blogRoutes);
app.use("/", routes2);
app.listen(3000,function(error){
    if(error)
    throw error;
    console.log("Server is running successfully on port 3000...");
});