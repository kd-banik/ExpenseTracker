let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'dbOne',
    port: 3306
});

connection.connect(function(err){
    if (err) {
        throw err;
    }
});

module.exports = connection;