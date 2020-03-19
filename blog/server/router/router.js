const express = require("express");
const submitBlog = require("../controller/submitBlog");
const getBlog = require("../controller/getBlog");
const getSlug = require("../controller/getSlug");
const appBlog = express.Router();
appBlog.get("/get",getBlog);
appBlog.post("/slug",getSlug);
appBlog.post("/submit",submitBlog);
//appBlog.get("/details/:slug/:id",/* Handler for blog details */);
const Routes = {
    blogRoutes : appBlog
};
module.exports = Routes;