const express = require("express");
const userLogin = require("../controller/userLogin")
const userDataSubmit = require("../controller/userDataSubmit");
const app  = express.Router();
app.post("/login",userLogin);
app.post("/user_details",userDataSubmit);
module.exports = app;
