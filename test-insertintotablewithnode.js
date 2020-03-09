/**
 * this piece of code helps to insert data into table USER_DETAILS in database USER_DATABASE
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

    let sql = "INSERT INTO USER_DETAILS (Name, Address) VALUES ('Aritra Bhattacharya','Kasba, Kolkata-78, West Bengal, India')";

    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log('1 row inserted'+result.insertId);  //result.insertId returns the id against which the value is put. but only one row can be inserted at a time.
    });
});

connection.end();

/**
 * for inserting multiple records in a single table :
 * var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
 */
