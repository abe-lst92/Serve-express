var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


var characters = [
    {
        routeName: "jonh", 
        name: "jonh",
        role: "famous guy",
        age: 21,
        
    },
    {
        routeName: "Fer", 
        name: "fer",
        role: "nerd girl",
        age: 21,
        
    } , {
        routeName: "nordy", 
        name: "nordy",
        role: "scary guy",
        age: 21,
        
    } , {
        routeName: "Ash", 
        name: "Ash",
        role: "Interested girl",
        age: 21,
        
    }
]

//Send a json as an object
app.get("/", function(req, res){
    res.send("To fast, To Furious")
    
    app.get("/jonh", function(req, res){
        res.json(jonh);

    })

    app.get("/Fer", function(req, res){
        res.json(Fer);
        
    })

    app.get("/Ash", function(req, res){
        res.json(Ash);
        
    })
})


  server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});