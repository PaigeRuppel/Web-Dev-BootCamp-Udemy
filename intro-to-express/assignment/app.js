const express = require("express");
const app = express();

// "/" => "Hi There!" -- req and res are objects with request and response info
app.get("/", function(req, res) {
	res.send("Hi there, Welcome to my Assignment!");
});

// var animals = [
// 	{
// 	name: 'pig' 		
// 	noise:'Oink'
// 	},
// 	{
// 	name: 'cow' 
// 	noise:'Moo'
// 	},
// 	{
// 	name: 'dog'
// 	noise:'Woof Woof!';
// 	}
// ]

// route parameters - denoted by a colon
app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof woof!",
		cat: "FEED ME HUMAAAN",
		goldfish: "blub blub"
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];

	// var noise = animals(animal).noise;
	res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req,res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var response = "";

	for (var i = 0; i < times; i++) {
		response += " " + message;
	}

	res.send(response);
});

// catch-all route - especially useful when you want to have a custom error page display
// order is important - this should be last or it will effectively override any other routes you have defined
app.get("*", function(req,res){
	res.send("You are a star! But I couldn't find your page");
});

// start server
app.listen(3000, function(){
	console.log("Serving demo app on port 3000");
});