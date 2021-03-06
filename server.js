var express = require("express");

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended:true }));
app.use(express.json())

var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use(routes);
 
app.listen(port, function() {
    console.log("server running on port " + port);
});