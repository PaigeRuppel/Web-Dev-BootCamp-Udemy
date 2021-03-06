var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Clare", "Levi", "Alex", "Josh", "Victoria"];

app.get("/", function(req, res){
	res.render("home");
});

app.get("/friends", function(req,res){
	res.render("friends", {friends: friends});
});

app.post("/addFriend",function(req,res){
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.listen(8000, function(){
	console.log("Server started");
});