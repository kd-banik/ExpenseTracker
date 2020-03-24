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

    let sql1 = "CREATE TABLE USER_CLAIMS (ClaimID BIGINT AUTO_INCREMENT PRIMARY KEY, ClaimMessage varchar(500), ClaimType varchar(100), UserID BIGINT, ManagerID BIGINT, ExtraPersons BIGINT, ExtraPersonName varchar(250), Amount BIGINT, Files MEDIUMBLOB)";
    let sql2 = "INSERT INTO USER_CLAIMS (ClaimTitle, ClaimMessage, ClaimType, UserID, ManagerID, ExtraPersons, ExtraPersonName, Amount, Files) VALUES ?"
    let value = [
        ['Claim 1', 'This is a demo message', 'Food Claim', 1, 1, 1, 'Extra Person 1', 200, ],
        [],
        [],
        [],
        [],
        [],
        []
];
    connection.query(sql1, sql2, [value], function (err, result) {
        if (err) {
            throw err;
        }
        console.log('Table creation successful.'+result.affectedRows);
    });
});