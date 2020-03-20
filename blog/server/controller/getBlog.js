const connection = require("./connection");
let getBlog = function(request,response,next){
    console.log("Get Blog request received...");
    let sql = "SELECT id_blog,title_blog,brief_blog FROM tbl_blog";
    connection.mysqlConnSession.query(sql,function(error ,data,fields){
        if(error){
            response.type("application/json");
            response.status(400).send({status:400,message:'errors',result:error});
            throw error;
        }
        console.log(data);
        response.type("application/json");
        response.status(200).send({status:200,message:'success',result:data});
        console.log("blogs send");
    });
}

module.exports = getBlog;