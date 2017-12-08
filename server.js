
// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const promise = require("bluebird");
const uuidv1 = require('uuid/v1');
var current_id;
var last_id;
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
let localIDuuid = uuidv1();

// query db, find the value of last id
// store last id value to new variable
// increment last id by one and save to new user entry
db.sibi_americans.findAll({
  limit: 1,
  where: {},
  order: [ [ 'id', 'DESC' ]]
}).then(function(entries){
  last_id = entries[0].id;
  current_id = last_id + 1;
}); 

const sibi_americans = db.sibi_americans.build({
  id:current_id,
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
  GUID: localIDuuid
}).save().then(newUser => {
  console.log(newUser)
}).catch(error => {
  console.log(error)
})
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
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function(req, res) {
      
    console.log("App listening on PORT " + PORT);
  });
});

