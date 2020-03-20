const express = require("express");
const {check , validationResult} = require("express-validator");
const submitBlog = require("../controller/submitBlog");
const getBlog = require("../controller/getBlog");
const getSlug = require("../controller/getSlug");
const appBlog = express.Router();
appBlog.get("/get",getBlog);
appBlog.post("/slug",getSlug);
appBlog.post("/submit",[
    check('blog_title').not().isEmpty().withMessage("Title should not be empty"),
    check('blog_slug').not().isEmpty().withMessage("Slug should not be empty"),
    check('blog_short_description').not().isEmpty().withMessage("Short Description should not be empty"),
    check('blog_content').not().isEmpty().withMessage("Content Should not be empty")],function(request,response,next){
        console.log("middle ware validtion");
        let errors = validationResult(request);
        console.log(errors.isEmpty());
        console.log("Error....");
        console.log(errors);
        if(!errors.isEmpty()){
            console.log("Error Occured");
            response.type("application/json");
            response.status(400).send({error: errors.array()});
            return ;
        }
        next();
    },submitBlog);
//appBlog.get("/details/:slug/:id",/* Handler for blog details */);
const Routes = {
    blogRoutes : appBlog
};
module.exports = Routes;