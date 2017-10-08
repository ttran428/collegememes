var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/home", function(req, res) {
    res.send("HEY");
})
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Memes are loading...")
})
