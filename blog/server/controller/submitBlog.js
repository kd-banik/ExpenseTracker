const connection = require("./connection");
const submitBlog = function(request,response,next){
    console.log("Blog submitted");
    console.log(request.body);
    let blogData = request.body;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let blogid = date.getTime();
    let sql = "INSERT INTO db_blog.tbl_blog (id_blog,title_blog,brief_blog,content_blog,slug_blog,date_blog) VALUES("+blogid+",'"+blogData.blog_title+"','"+blogData.blog_short_description+"','"+blogData.blog_content+"','"+blogData.blog_slug+"','"+year+"-"+month+"-"+day+"')";
    connection.mysqlConnSession.query(sql,function(error){
        if(error)
        throw error;
        console.log("Blog inserted sucessfully....");
        response.writeHead(200,{"contentType":"text/json"});
        response.end("Data Received and submitted");
    });
}
module.exports = submitBlog;