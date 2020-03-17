let submitRegistrationData = function (request,response,next){

    console.log("Registration request");
    response.writeHead(200,{"contentType":"text/html"});
    response.end("Registration Request");
}
module.exports = submitRegistrationData;