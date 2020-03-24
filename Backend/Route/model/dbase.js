let mysql = require("mysql");

let connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
    port: 3306
});

connect.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Database On");
});

module.exports = connect;