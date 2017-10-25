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

app.get("/posts", function(req, res) {
	var posts = [
	{title: "Post 1", author: "Paige"},
	{title: "Catnip Dreams", author: "Paige"},
	{title: "Best canned food according to cats", author: "Paige"}
	]
	res.render("posts.ejs", {posts: posts});
});

app.listen(4000, function(){
	console.log("server is listening on port 4000");
});