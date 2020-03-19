const mysql = require("mysql");

const connection = mysql.createPool({
    connectionLimit: 20,
    host: "localhost",
    user: "root",
    password: "123456",
    database: "db_blog",
    port: 3306
});

let sqldb = {}; //db object

sqldb.all = () => {
    return new Promise((resolve, reject) =>
    {
        const sql = "select * from img_blog t1 inner join tbl_blog t2 on t1.id_blog = t2.id_blog inner join registration t3 on t3.empID = t2.empID order by t3.empID asc";

        connection.query(sql, (err, result) => {
            if (err) {
                return reject(err);  //reject promise if there is an erro
            }
            console.log("Connected to database");
            return resolve(result);
        });
    });

};

module.exports = sqldb;

// connection.connect(function (err) {
//     if (!err) {
//         console.log("Database connection successful.");
//     }
//     else {
//         throw err;
//     }
// });

// app.get("/", function (err, req, res) {
//     if (err) {
//         throw err;
//     }

//     const sql = "select * from img_blog t1 inner join tbl_blog t2 on t1.id_blog = t2.id_blog inner join registration t3 on t3.empID = t2.empID order by t3.empID asc";

//     connection.query(sql, function (err, rows, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(rows);
//         console.log(data);
//     });
//     res.send("Success!!");
// });