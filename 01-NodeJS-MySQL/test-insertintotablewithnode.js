/**
 * this piece of code helps to insert data into table USER_DETAILS in database USER_DATABASE
 */

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'USER_DATABASE'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('Connected to mysql.');

    let sql = "INSERT INTO USER_DETAILS (Name, Email, Designation, Password) VALUES ?";
    let values = [
        ['Kushaldeep Kanshabanik', 'kushal.deep@iamsir.com', 'CEO', '123456789'],
        ['Vishal Bhowmick', 'vishal@bhowmick.com', 'Developer', '987654321'],
        ['Pragnananda Ganguly', 'pragna@ganguly.com', 'Developer', '876543219'],
        ['Soumick Adhicurry', 'mick@adhicurry.com', 'Developer', '765432198'],
        ['Kunal Paloi', 'kunal@tamrolipto.com', 'Tester', '654321987'],
        ['Saransh Karan', 'saransh@karan.com', 'Tester', '543219876'],
        ['Pushpa Gupta', 'puspa@gupta.com', 'Tester', '432198765'],
        ['Debopriya Nath', 'nath@debopriya.com', 'Production', '321987654'],
        ['Jamshed Khan', 'jamshed@khan.com', 'Production', '219876543'],
        ['Kushal Banik', 'banik@kushal.com', 'Production', '198765432'],
        ['Pragna Gangly', 'pragna@gangly.com', 'Sales', '1234567890'],
        ['Bishu Howlmik', 'bish@howl.com', 'Sales', '9876543210'],
        ['Tribal Lipto', 'lipto@tribal.com', 'Systems', '8765432109'],
        ['Soyamilk Curry', 'curry@milk.com', 'Systems', '7654321098']
    ];

    connection.query(sql, [values], function (err, result) {
        if (err) {
            throw err;
        }
        console.log('Rows Created: ' + result.affectedRows);  //result.insertId returns the id against which the value is put. but only one row can be inserted at a time.
    });
});

// connection.end();

/**
 * for inserting multiple records in a single table :
 * var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
 */
