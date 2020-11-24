var express = require("express");
var exphbs = require("express-handlebars");
var burger = require("./models/burger")

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

var routes = require("./controllers/burgerController.js");

app.use(routes);

app.get("/burgers", function(req, res){
    burger.all(function(burgerdata){
        console.log(burgerdata)
        res.render("home", {burgerdata: burgerdata})
    })
})

app.put("/burgers/:id", function(req, res){
    var newValue = req.body.newDevoured
    burger.update(req.params.id, {devoured: newValue}, function(results){
        console.log(results)
        res.status(200)
    })
})

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(port, function(){
    console.log("server running on port " + port);
});