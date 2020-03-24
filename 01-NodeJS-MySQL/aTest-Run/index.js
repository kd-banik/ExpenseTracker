let express = require('express');
let app = express();

//Responds with 'Hello World' for the homepage
app.get('/', function(req, res) {
    console.log('Got a GET request for the homepage');
    res.send('Hello Get');
})
//Responds with a POST request for the homepage
app.post('/users', function(req, res) {
    console.log('Got a POST request for users page');
    res.send('Hello Post');
})
//Responds with GET for users page
app.get('/users', function(req, res) {
    console.log('Got a GET request for users page');
    res.send('Hello Get');
})
//responds with DELETE request for /del_user page
app.delete('/del_user', function(req, res) {
    console.log('Got a DELETE request for /del_user');
    res.send('Hello Delete');
})
// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
 })
 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/ab*cd', function(req, res) {   
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
 })

let server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})



























// let express = require('express');
// app = express();
// let http = require('http')

// http.createServer(function (res, req) {
//     res.write(200, { 'Content-Type': 'text/html' });   //write a response
//     res.end();  //End response

//     // let url = req.url;
//     // if (url === '/about') {
//     //     res.write('Welcome to home page');
//     //     res.end();
//     // } else if (url === '/contact') {
//     //     res.write('Welcome to contact page');
//     //     res.end();
//     // } else {
//     //     res.write('Hello World');
//     //     res.end();
//     // }
// }).listen(3000, function () {
//     console.log('Server started at port 3000'); //server object listens to port 3000
// })

// // app.get('/',function(req, res) {
// //     // res.send('Hello World') //Hello World response when a GET request is made
// //     console.log('Hello World')
// //     next()
// // })