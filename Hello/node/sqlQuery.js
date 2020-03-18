const mysql = require("mysql");
const config = require("./connection_db/connect.js");
mysqlConnection = mysql.createConnection({
    host: config.Host,
    user: config.User,
    password: config.Password,
    database: config.Database,
    port: config.Port
});
mysqlConnection.connect(function(error){
    if(error)
    throw error;
    console.log("connection created sucessfully");
});
const idRecord = function(request,response,next){
    response.writeHead(200,{"contentType":"json"});
    // response.end("get Request");

    sql = "SELECT claim.Claim_id, claim.Emp_id, CONCAT(registration.fname, ' ', registration.lname) AS 'Employee_Name', claim.Claim_Type, claim.No_of_Person, claim.Claim_amount FROM claim INNER JOIN registration ON claim.Emp_id=registration.empID";
    
    mysqlConnection.query(sql,function(error,result,fields){
        if(error)
        throw error;
        console.log("query executed");
        response.end(JSON.stringify(result));
        //console.log(result);
        // mysqlConnection.end(function (error){
        //     if(error)
        //     throw error;
        //     console.log("Ending connection");
        // });
    })
}
module.exports = {
   approval: idRecord
}