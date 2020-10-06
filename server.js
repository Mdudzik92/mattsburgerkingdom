var express = require("express");
var exphbs = require("express-handlebars");
var burger = require("./models/burger")

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/burgers", function(req, res){
    burger.all(function(burgerdata){
        console.log(burgerdata)
        res.render("home", {burgerdata: burgerdata})
    })
})


app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(port, function(){
    console.log("server running on port " + port)
});