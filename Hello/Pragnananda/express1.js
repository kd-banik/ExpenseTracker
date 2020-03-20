let express = require("express");
let router = express.Router();
let mysql = require("mysql");
const config = require("./config");
//let app = express();

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

const idRecord = function(req,response,next){
    //response.setHeader('ContentType', 'application/json');
    //response.status(200);

    console.log("hii")

    sql = "INSERT INTO  claim (Emp_id, Manager_id, Claim_type, No_of_person, Claim_amount, Comment) VALUES ('" + req.body.empId + "','" + req.body.projectManagerId + "','" + req.body.typeofClaim + "','" + req.body.noPerson + "','" + req.body.amount + "','" + req.body.invoiceFile + "','" + req.body.comment + "')";
    console.log("hello")
    mysqlConnection.query(sql,function(error,data,fields){
        if(error)
        //res.status(500).json({ error: 'message' });
        throw error;
            //response.send({status:404,message:'error',result:JSON.stringify(data)});
        console.log("Record inserted Successfully");

        mysqlConnection.end(function (error) {
            if (error)
                throw error;
            console.log("Ending connection");
        });
       // window.location.href = "../index.html";
        response.redirect('../login');

        response.send({status:200,message:'success',result:data});
        
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