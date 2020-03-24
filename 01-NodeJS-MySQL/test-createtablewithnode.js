/**
 * this piece of code helps to create table in database USER_DATABASE
 */

let mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '123456',
    database: 'USER_DATABASE',
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('Connected to mysql.');

    let sql = "CREATE TABLE USER_DETAILS (ID INT AUTO_INCREMENT PRIMARY KEY, Name varchar(100), Email varchar(150), Designation varchar(50), Password varchar(100))";

    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log('Table creation successful.'+result);
    });
});

//connection.end();

/**
 * If table already exists then use keyword ALTER to add primary key to the existing table -
 * let sql = "ALTER TABLE USER_DETAILS ADD COLUMN ID INT AUTO_INCREMENT PRIMARY KEY";
 * connection.query(sql, function(err, result){
 * if (err){
 * throw err;
 * }
 * console.log('Table altered);
 * });
 */