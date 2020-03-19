const mysql = require("mysql");
const config = require("../config");
const mysqlConnection = mysql.createConnection(config.mysqlConnection);
mysqlConnection.connect(function(error){
    if(error)
    throw error;
    console.log("Mysql connection created sucessfully...");
});
module.exports = {
    mysqlConnSession : mysqlConnection
};