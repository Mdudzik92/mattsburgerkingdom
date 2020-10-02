var express = require("express");
var exphbs = require("express-handlebars");

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(port, function(){
    console.log("server running on port " + port)
});