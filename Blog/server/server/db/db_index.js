const mysql = require("mysql");

const connection = mysql.createConnection({
    // connectionLimit: 20,
    host: "localhost",
    user: "root",
    password: "toor",
    database: "db_blog",
    port: 3306
});

let sqldb = {}; //db object

// let all = function (req, res, next) {
//     // res.setHeader("ContentType", "json");
//     // res.status(200);

//     const sql = "select * from tbl_blog";

//     connection.query(sql, function (err, rows, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(rows);
//         // console.log(data);
//         // res.send({status:200,message:'success',result:data});
//     });
//     res.send({status:200,message:'success',result:data});
// };

// let sqldb = {
//     allresult=all
// };

sqldb.all = () => {
    // console.log(req);
    return new Promise((resolve, reject) => {
        // const sql = "select * from img_blog t1 inner join tbl_blog t2 on t1.id_blog = t2.id_blog inner join registration t3 on t3.empID = t2.empID order by t3.empID asc";
        // const sql = "select * from img_blog t1 inner join tbl_blog t2 on t1.id_blog = t2.id_blog asc";
        const sql = "select * from tbl_blog";
        connection.query(sql, (err, result) => {
            if (err){
                return reject(err);  //reject promise if there is an error
            }
            console.log("Connected to database");
            return resolve(result);
        });
        // res.writeHead(200, {"contentType":"text/json"});
        // res.end(JSON.stringify(result));
    });
};

sqldb.one = (id) => {
    // console.log(req);
    return new Promise((resolve, reject) => {
        // const sql = "select * from img_blog t1 inner join tbl_blog t2 on t1.id_blog = t2.id_blog inner join registration t3 on t3.empID = t2.empID order by t3.empID asc";
        // const sql = "select * from img_blog t1 inner join tbl_blog t2 on t1.id_blog = t2.id_blog asc";
        const sql = "select * from tbl_blog where id_blog = '"+id+"'";
        connection.query(sql, [id], (err, result) => {
            if (err){
                return reject(err);  //reject promise if there is an error
            }
            console.log("Connected to database");
            console.log(result);
            return resolve(result[0]);  //only return one row, hence [0]
        });
    });
};

// connection.connect(function (err) {
//     if (!err) {
//         console.log("Database connection successful.");
//     }
//     else {
//         throw err;
//     }
// });

module.exports = sqldb;