var express 		= require('express'),
	app				= express(),
	cors			= require('cors'),
	bodyParser		= require('body-parser'),
	passport		= require('passport'),
	localStrategy	= require('passport-local'),
	mongoose		= require('mongoose'),
	User			= require('./models/user');

var databaseUri = 'mongodb://localhost:27017/gdmp';

app.options('*', cors()); 

mongoose.connect(databaseUri);
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname));
console.log("dirname:" + __dirname+"/public");
app.use(require('express-session')({
	secret:"gdp",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use(function(req,res,next){
// 	res.locals.currentUser = req.user;
// })
app.get("/register",function(req,res){
	res.render("register");
});

app.post("/register",function(req,res){
	var newUser = new User({username:req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("/register");
		}
		passport.authenticate("local")(req, res,function(){
			res.redirect("/login");
		});
	});
});

app.get("/", function(req,res){
	res.send("client started on root");
})
app.get("/login",function(req,res){
	res.render("login");
});

app.post("/login",passport.authenticate("local",
	{
		successRedirect:"/telesales",
		failureRedirect:"/login"
	}),function(req,res){
});

app.get("/telesales",isLoggedIn,function(req,res){
	res.render("telesales");
});	

app.get("/logout", function(req,res){
	req.logout();
	res.redirect("/login");
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	return res.redirect("/login");
}


var port = 3001;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('gdmp-client running on port ' + port + '.');
});

module.exports = app;