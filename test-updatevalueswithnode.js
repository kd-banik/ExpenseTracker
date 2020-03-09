
/**
 * query to be checked. Parameters are not properly defined and needs to be altered before executing
 */
let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "USER_DETAILS"
});

con.connect(function(err) {
  if (err) throw err;
  let sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

con.end();