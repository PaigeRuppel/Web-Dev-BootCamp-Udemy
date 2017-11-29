var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req, res) {
	request('https://omdbapi.com/?s=ohio&apikey=thewdb', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var results = JSON.parse(body);
			res.send(results["Search"][0]["Title"]);
		}
	});
});

app.listen(4000, function(){
	console.log("server is listening on port 4000");
});