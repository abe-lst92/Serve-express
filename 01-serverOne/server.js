// require//import the http module
const http = require('https');
//define port to listen for incoming requests
var PORT = 9010;

//create a generic function to handle requests and responses
function handleRequest(request, response){
    console.log("Request Made!");
    response.end(`It works! path hit: ${request.url}`);
}

//send the string to the client when the user visits the Port URl


//Use the node http package to create our server

var server = http.createServer(handleRequest); 

// start our server so that it can begin listening to client requests.
server.listen(PORT, function(){
    console.log("Server Listening on: http://localhost: " + PORT);
})