const express = require('express'),
app = express();
port = process.env.PORT || 3000;    //to be altered accordingly
/*___________________________________________________________________________________________________________________ */
app.use(express.json);
/*___________________________________________________________________________________________________________________ */
app.use(express.urlencoded({
        extended : false
    }));
/*___________________________________________________________________________________________________________________ */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested_With, Content-Type, Accept');
    next();
});
/*___________________________________________________________________________________________________________________ */
app.use('/login', function(req, res, next){
    console.log('login');
    next();
});
/*___________________________________________________________________________________________________________________ */
app.use('/submit', function (req, res, next) {
    console.log('registration');
    next();
})
/*___________________________________________________________________________________________________________________ */
app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log('Server running');
});
/*___________________________________________________________________________________________________________________ */