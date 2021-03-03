// Require/import the HTTP module
const http = require("http");





// Define a port to listen for incoming requests
var Server1 = 5000;
var Server2 = 5100;


function handleRequest(request, response){
    count ++
    console.log(`Request ${count}.Url requested ${request.url}`);
    response.end("It works! path Hit: " + request);
}



const server = http.createServer(handleRequest);

server.listen(Server1, function(){
console.log("Server is running on: http://localhost: " + Server1);


})

const server1 = http.createServer(handleRequest);


server1.listen(Server2, function(){
console.log("Welcome To: http://localhost: " + Server2);


})

// Create a generic function to handle requests and responses
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// Start our server so that it can begin listening to client requests.
  // Log (server-side) when our server has started
  



