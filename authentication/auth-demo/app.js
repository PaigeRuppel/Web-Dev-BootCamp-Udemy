var passportLocalMongoose = require("passport-local-mongoose"),
	  LocalStrategy 				= require("passport-local"),
	  bodyParser 						= require("body-parser"),
	  mongoose 							= require("mongoose"),
	  passport 							= require("passport"),
	  express 							= require("express"),
	  User									= require("./models/user");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/auth_demo_app", {useMongoClient:true});

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
	secret: "Fern is the best kitty but also the worst",
	resave: false,
	saveUninitialized: false
}));


//============================================
//Set up passport to work in your application
//============================================

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============================================
//ROUTES
//============================================

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/secret", function(req, res){
	res.render("secret");
});

//============================================
//AUTH ROUTES
//============================================


//===========================================
//REGISTER ROUTES
//===========================================

app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req, res){
	req.body.username
	req.body.password
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
			if(err){
				console.log(err);
				return res.render('register');
			}		
			passport.authenticate("local")(req, res, function(){
				res.redirect("/secret");
			});
	});
}); 

//===========================================
//LOGIN ROUTES
//===========================================

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}) ,function(req, res){

});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server started!");
});

//===========================================
//LOGOUT ROUTES
//===========================================

app.get("/logout", function(req, res) {
	
});