/**
 * this piece of code helps create database in mysql using node.js
 */
let mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '123456',
    // database: ''
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('Connected to mysql');
    connection.query('CREATE DATABASE USER_DATABASE', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('Database Created');
    });
});

connection.end();

/**Run this code with the syntax: node FILENAME.js */