let express = require('express');   //required for implementing express variable
let app = express();    //initializes the express server and puts the server in the variable app

app.get('/url', (req, res, next) => {   //req - request body that carries the request parameter, res - response body that handles response functions like .render() whic is used to render templates, 
    res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);    //.json returns the json data 
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

//=================================================================================================================

let fs = require('fs');
let md5 = require('md5');
// console.log(md5());
fs.readFile('test-insertintotablewithnode.js', function (err, Password) {
    if (err) {
        throw err;
    }
    console.log(md5(Password));
});