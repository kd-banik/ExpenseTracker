
//this code is supposed to connect from a pool of connections
let mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sampleDatabase'
});

//fetching a connection from the pool
pool.getConnection(function (err, connection) {
    //query
    if (err) {
        return console.log('error: '+err.message);
    }
    console.log('Initiated connection to database');
});

//returning a connection to the pool
pool.getConnection(function (err, connection) {
    if (err) {
        return console.log('error: '+err.message);
    }
    connection.release();   //this returns the connection to the pool after work is done, to be reused by someone else
    console.log('Connection to database terminated and returned to pool');
});

//close a connection and remove it from the pool
pool.getConnection(function (err, connection) {
    if (err) {
        return console.log(err.message);
    }
    connection.destroy();   //this destroys an existing connection. A new one will be created later on auto if required
    console.log('Existing connection closed and removed from pool');
});

//to end all connections in the pool
pool.end(function (err) {
    if (err) {
        return console.log(err.message);
    }
    //close all connections;
    console.log('Connection pool empty for database');
});