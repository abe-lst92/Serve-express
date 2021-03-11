
// Dependencies
// // =============================================================
 var express = require("express");
 var app = express();
 var PORT = 3000;
   // data
   
   app.use(express.urlencoded({extended: true}));
app.use(express.json());

   var characters = [
    {
        routeName: "Dom", 
        name: "Dom",
        role: "Leader",
        age: 26,
        
    },
    {
        routeName: "Lety", 
        name: "Lety",
        role: "Tough Lady",
        age: 20,
        
    } , {
        routeName: "Bryan", 
        name: "Bryan",
        role: "Amateur",
        age: 20,
        
    } , {
        routeName: "Mia", 
        name: "Mia",
        role: "Quiet Lady",
        age: 18,
        
    }
]
 ///Routes
// //EXPRESS when someone does a GET request, trigger this behavior//
// //Sends a json as an object


app.get("/", function(req, res){
    
    res.send("Welcome to the show");

    app.get("/characters", function(req, res) {
        return res.json(characters);

    });

    app.get("/characters/character", function(req,res) {
           var chosen = req.param.character;
               console.log(chosen);
           })
  })
  
 
  // Displays a single character, or returns false
//   

//  app.get("/", function (req, res) {
//      res.send("Welcome to my Start Wars Page");
    
//      app.get("/characters", function(req, res) {
//          res.json(characters);
//      });
//          app.get("/Mia", function (req, res) {
//              res.json(Mia);
//          });
//      app.get("/Bryan", function (req, res) {
//          res.json(Bryan)
//      });
//  }
//  );
// //Listener
 app.listen(PORT, function() {
     console.log("App is listening on PORT " + PORT);
 })