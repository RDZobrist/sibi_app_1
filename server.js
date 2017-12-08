// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const promise = require("bluebird");

// Require History Schema
const db = require("./server/models");




// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3010;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


app.get('/users', function(req,res){
  db.sibi_americans.findAll({})
  .then(function(usersDB) {
    res.json(usersDB);
})
})
// -------------------------------------------------
app.post("/api/saved", function(req, res) {
  // create takes an argument of an object describing the item we want to



  db.sibi_americans.create({
    id:'',
    Title: req.body.Title,
    GivenName: req.body.GivenName,
    MiddleInitial: req.body.MiddleInitial,
    Surname:req.body.Surname,
    StreetAddress: req.body.StreetAddress,
    State: req.body.State,
    ZipCode: req.body.ZipCode,
    City: req.body.City,
    EmailAddress: req.body.EmailAddress,
    Username: req.body.Username,
    Password: req.body.Password,
    BrowserUserAgent: req.body.BrowserUserAgent,
    TelephoneNumber: req.body.TelephoneNumber,
    Birthday: req.body.Birthday,
    Color: req.body.Color,
    Ocupation: req.body.Ocupation,
    Company: req.body.Company,
    Vehicle: req.body.Vehicle,
    Domain: req.body.Domain,   
    GUID: req.body.GUID


  }).then(function(dbNewUser) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbNewUser)
  });
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// success Route. This will redirect the user to our rendered React application
// app.get("/success", function(req, res) {
//   res.sendFile(__dirname + "/public/success.html");
// });
// -------------------------------------------------
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function(req, res) {
      
    console.log("App listening on PORT " + PORT);
  });
});

