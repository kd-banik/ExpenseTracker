let express = require('express');
let app = express();

app.get('/users', function (req, res) {
   res.send('Hello World');
})

let server = app.listen(8080, function () {
   let host = server.address().address
   let port = server.address().port
   console.log(host)
   console.log("Example app listening at http://%s:%s", host, port)
})