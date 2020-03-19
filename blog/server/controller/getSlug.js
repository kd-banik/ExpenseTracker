const connection = require("./connection");
let getSlug = function(request,response,next){
    console.log("Slug request received ");
    console.log(request.body);
    let sql = "SELECT COUNT(*) AS count_slug FROM tbl_blog WHERE INSTR(slug_blog,'"+request.body.slug+"') != 0";
    connection.mysqlConnSession.query(sql,function(error , result, fields){
        if(error)
        throw error;
        console.log(result);
        response.writeHead(200,{"contentType":"json"});
        response.end(JSON.stringify(result));
    });
}

module.exports = getSlug;