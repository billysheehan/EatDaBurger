var express =require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// override
 app.use(methodOverride("_method"))
// Set Handlebars.
var exphbs = require("express-handlebars");

// More handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controllers/burgersController.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
