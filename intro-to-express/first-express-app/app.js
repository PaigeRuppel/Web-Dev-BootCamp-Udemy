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
})

app.listen(3000, function(){
	console.log("Serving demo app on port 3000");
});