const express = require("express");
const submitBlog = require("../controller/submitBlog");
const appBlog = express.Router();
//appBlog.get("/get",/* callback for response blogpost */);
appBlog.post("/submit",submitBlog);
//appBlog.get("/details/:slug/:id",/* Handler for blog details */);
const Routes = {
    blogRoutes : appBlog
};
module.exports = Routes;