var mongoose = require("mongoose");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo_2", {useMongoClient:true});


var Post = require("./models/post");
var User = require("./models/user");



Post.create({
	title: "How to cook the best burger",
	content: "I guess this is more relevant"
}, function(err,post){
	User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
		if(err) {
			console.log(err);
		} else {
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if (err) {
					console.log(err);
				} else {
					console.log(data);
				}
			});
		}
	});
});

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });

//Find user
//Find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });