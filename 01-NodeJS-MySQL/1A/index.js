let express = require('express');
let app = express();
let url = require('url');
let http = require('http');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let files = require('fs');
let md5 = require('md5');
/*******************************************************************************************************************/
//display users in json format
app.get('/listUsers',function(req, res) {
    files.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        res.end(data);
    });
})
//-----------------------------------------------------------------------------|
//raw json data (pasted in users.json)
// let user = {                                                                   
//     "user4" : {
//        "name" : "mohit",
//        "password" : "password4",
//        "profession" : "teacher",
//        "id": 4
//     }
//  }
//-----------------------------------------------------------------------------|
//displays users adding the newly added raw json format
app.post('/addUsers',function(req, res) {   
    files.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {    //reads from existing file
        if (err) {
            throw err;
        }
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
//-----------------------------------------------------------------------------|
//displays userby calling from user ID
app.get('/:id', function(req, res) {
    files.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        let users = JSON.parse(data);
        let user = users['user'+req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
})
//------------------------------------------------------------------------------|
//deletes user having user id 2
let id = 2;

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       if (err) {
           throw err;
       }
      data = JSON.parse( data );
      delete data["user" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})
//------------------------------------------------------------------------------|
//calling function
let server = app.listen(8081, function() {
    let host = server.address().address
    let port = server.address().port
    console.log('Listening at port http://%s:%s', host, port)   
})