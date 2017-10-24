var express = require("express");
var app = express();

//root
app.get("/", function(req, res) {
	res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar: thing});	
});
app.listen(4000, function(){
	console.log("server is listening on port 4000");
});