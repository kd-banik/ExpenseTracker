/**
 * this piece of code helps to select and display data from table USER_DETAILS in database USER_DATABASE
 */

let mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '123456',
    database: 'USER_DATABASE'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('Connected to mysql.');

    connection.query("SELECT * FROM USER_DETAILS",function (err, data, fields) {
        if (err) {
            throw err;
        }
        console.log(data);
        // console.log(result);    //the result field returns the output generated from the query
        console.log(fields);
    });
});

connection.end();

/**
 * con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields); ->the fields object contains the information about each field in result
  });
});
 */