let mysql = require("mysql");
let userdata  = require ("../connection.js");

const records = function(request,response,next){
    sql = "SELECT * FROM claim";
    mysqlConnection.query(sql,function(error,result,fields){
        if(error)
        throw error;
        console.log("query executed");
        response.end(JSON.stringify(result));
        console.log(result);
       
    })
   

}
module.exports = {
    record: records
 }