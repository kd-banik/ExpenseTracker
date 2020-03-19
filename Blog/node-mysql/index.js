const express = require("express"),
    app = express();
port = process.env.PORT || 3000;

const routes = require("./server/routes/route_index");

//___________________________________________port allotment______________________________________________________
const server = app.listen(port, function () {
    const host = server.address().address;
    console.log(host);
    console.log("Server started on port", port, "with address", host);
});

app.use(express.json());
app.use("/", routes);
