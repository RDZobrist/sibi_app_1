// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


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

// -------------------------------------------------
app.post("/api/saved", function(req, res) {
  console.log(req.body);
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.NewUser.create({
    Title: req.body.title,
    complete: req.body.complete
  }).then(function(dbTodo) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbTodo);
  });
});
// firstName: "",
// surname: "",
// middleInitial: "",
// stateOfResidence:"",
// streetAddress: "",
// city: "",
// zipCode:"",
// country: "",
// password: "",
// password2: "",
// username:"",
// dob:"",
// emailAddress:"",
// telephoneNumber: "",
// mothersMaiden: "",
// companyOfEmployment: "",
// ocupation:""
// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// -------------------------------------------------

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function(req, res) {
        
      console.log("App listening on PORT " + PORT);
    });
  });
