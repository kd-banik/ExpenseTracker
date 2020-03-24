/**
 * the following code demonstrates table dropping 
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

    connection.query('DROP TABLE USER_DETAILS', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('Table deleted.');
    });
});

/**
 * drop if exists query
 */

// let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'USER_DATABASE'
// });

// connection.connect(function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to mysql.');

//     connection.query('DROP TABLE IF EXISTS USER_DETAILS', function (err, result) {
//         if (err) {
//             throw err;
//         }
//         console.log(result);
//     });
// });

// connection.end();