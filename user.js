
let mysql = require("mysql");
let userdata  = require ("../connection.js");
const idRecord = function(request,response,next){
    //response.writeHead(200,{"contentType":"json"});
    
    
    sql = "SELECT * FROM claim WHERE Claim_id = '"+request.params.Claim_id+"'";
    mysqlConnection.query(sql,function(error,result,fields){
        if(error)
        throw error;
        console.log("query executed");
        response.writeHead(200,{"contentType":"json"})
        return response.end(JSON.stringify(result));
        console.log(result);
       
    })
}
module.exports = {
   record: idRecord
}
