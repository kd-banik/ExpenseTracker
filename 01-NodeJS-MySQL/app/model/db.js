'user strict';

let mysql=require('mysql');

let connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('CONNECTED');

    connection.query('CREATE DATABASE IF NOT EXISTS TASKS', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('DATABASE CREATED'+'\n'+result);
    });

    // let sqlquery ='CREATE TABLE IF NOT EXISTS TABLE_TASKS(ID INT AUTO_INCREMENT PRIMARY KEY not null, TASK VARCHAR(200) NOT NULL, STATUS TINYINT DEFAULT "1", CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP';

    // connection.query(sqlquery, function (err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('TABLE CREATED'+'\n'+result);
    // });

    // let sql = 'INSERT INTO TABLE TABLE_TASKS IF NOT EXISTS (TASK, STATUS) VALUES ?';
    // let value = [
    //     [1, 'Find Bugs'],
    //     [2, 'Review Code'],
    //     [3, 'Fix Bugs'],
    //     [4, 'Refractor Code'],
    //     [5, 'Pus to production']
    // ];

    // connection.query(sql , [value], function (err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('ROWS CREATED'+'\n'+result.affectedRows);
    // });
});

module.exports=connection;