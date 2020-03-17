let userLogin = function(request,response,next){
    console.log("Login request");
    response.writeHead(200,{"contentType":"text/html"});
    response.end("Login Request");
};
module.exports = userLogin ;