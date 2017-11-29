// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


// Require History Schema
const db = require("./server/models");


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------


// -------------------------------------------------

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function(req, res) {
        
      console.log("App listening on PORT " + PORT);
    });
  });
