const express = require("express"), app = express();
port = process.env.PORT || 3000;

app.listen(port, () => {
    if (err) {
        throw err;
    }
},
    console.log("Server running on port", port));

    app.get("/", (request, response) =>
    {
        console.log(request.url);
        response.send("Server Started");
    });

    // let routes = require("../route/route.js") //route import
    // routes(app);    //route register