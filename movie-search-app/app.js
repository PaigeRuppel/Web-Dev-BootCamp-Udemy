var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

var key = "&apikey=thewdb";

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res) {
	var query = req.query.keyword;
	var url = "http://omdbapi.com/?s=" + query + key;
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

app.listen(4000, function(){
	console.log("server is listening on port 4000");
});