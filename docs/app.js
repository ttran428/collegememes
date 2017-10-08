var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
    res.render("index");
})

app.get("/home", function(req, res) {
    res.send("HEY");
})
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Memes are loading...")
})
