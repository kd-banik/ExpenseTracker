/**
 * this piece of code helps to select and display data from table USER_DETAILS with filters in database USER_DATABASE
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

    let sql = "SELECT * FROM USER_DETAILS WHERE Address = 'Park Lane 38'";  //WHERE filter used

    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});

/**
 * Use of wildcard characters demonstrated below
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

    let sql = "SELECT * FROM USER_DETAILS WHERE Address LIKE 'S%'";

    connection.query(sql, function (err, result) {
       if (err) {
           throw err;
       } 
       console.log(result);
    });
});


/**
 * Use of escape characters for displaying query values demonstrated below
 * 
 * When query values are variables provided by the user, you should escape the values.
 * This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.
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

    let adr = "Mountain 21";
    let sql = "SELECT * FROM USER_DETAILS WHERE ADDRESS = "+mysql.escape(adr);  

    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});

/**
 * fetching query values using the '?' placeholder method
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

    let adr = "Mountain 21";
    let sql = "SELECT * FROM USE_DETAILS WHERE Address = ?"

    connection.query(sql, [adr], function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});

/**
 * for multiple placeholder accessing the query should be written as follows -
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

    let name = 'Amy';
    let adr = 'Mountain 21';
    let sql = "SELECT * FROM USER_DETAILS WHERE Name = ? OR Address = ?";

    connection.query(sql, [name], [adr], function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});

/**
 * sorting the result displayed using sql query
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

    connection.query('SELECT * FROM USER_DETAILS ORDER BY Name', function (err, result) {  //ORDER BY query
        if (err) {
            throw err;
        }
        console.log(result);
    });
});

/**
 * ORDER BY DESC elaborated below
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

    connection.query('SELECT * FROM USER_DETAILS ORDER BY Name DESC', function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});

/**
 * deleting record with DELETE FROM statement
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

    connection.query('DELETE FROM USER_DETAILS WHERE ADDRESS = "Mountain 21"', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('Number of records deleted : '+result.affectedRows);
    });
});

connection.end();