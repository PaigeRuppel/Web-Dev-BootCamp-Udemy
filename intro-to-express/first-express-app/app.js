const express = require("express");
const app = express();

// "/" => "Hi There!" -- req and res are objects with request and response info
app.get("/", function(req, res) {
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!!");
});

// "/dog" => "Meow"
app.get("/dog", function(req, res){
	res.send("MEOW");
});

// route parameters - denoted by a colon
app.get("/r/:subredditName", function(req, res){
	var name = req.params.subredditName;
	res.send("Welcome to the " + name.toUpperCase() + " page");
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
	res.send("this is a comments page");
});

// catch-all route - especially useful when you want to have a custom error page display
// order is important - this should be last or it will effectively override any other routes you have defined
app.get("*", function(req,res){
	res.send("You are a star!");
});

// start server
app.listen(3000, function(){
	console.log("Serving demo app on port 3000");
});