let mysql = require ('mysql');

// create connection with mysql
// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'USER_DATABASE',
//     port: 3306
// });

// call connect method on connection object to connect to database server
// connection.connect(function (err) {
//     if (err) {
//         return console.error('error: '+err.message);
//     }
//     console.log('Connected to MySQL')
// });

//to terminate connection to database
// connection.end(function err() {
//     if (err) {
//         return console.log('error: '+err.message);
//     }
//     console.log('Close MySQL connection')
// });


// //destroy a connection from the database
// connection.destroy(function err() {
//     if (err) {
//         return console.log('error: '+err.message);
//     }
//     console.log('Close the database connection');
// });