const connection = require("./connection");
let getBlog = function(request,response,next){
    console.log("Get Blog request received...");
    let sql = "SELECT id_blog,title_blog,brief_blog FROM tbl_blog";
    connection.mysqlConnSession.query(sql,function(error ,result,fields){
        if(error)
        throw error;
        console.log(result);
        response.writeHead(200,{"contentType":"text/json"});
        response.end(JSON.stringify(result));
        console.log("blogs send");
    });
}

module.exports = getBlog;