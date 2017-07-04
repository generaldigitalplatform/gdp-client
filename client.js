var express 		= require('express'),
	app				= express(),
	cors			= require('cors'),
	bodyParser		= require('body-parser'),
	passport		= require('passport'),
	localStrategy	= require('passport-local'),
	mongoose		= require('mongoose'),
	User			= require('./models/user'),
	request			= require('request'),
 	http 			= require("http"),
    https 			= require("https"),
    cookieParser	= require('cookie-parser'),
    connectFlash	= require('connect-flash');

var routers = require('./routes/routes');

//var databaseUri = 'mongodb://localhost:27017/gdp';
var databaseUri = 'mongodb://gdp-server:gdp-server@ds131512.mlab.com:31512/gdp-server?authMechanism=SCRAM-SHA-1'

app.options('*', cors()); 

mongoose.connect(databaseUri);
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(connectFlash());
app.set("view engine","ejs");
app.use(express.static(__dirname));

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
// app.get("/register",function(req,res){
// 	res.render("register");
// });

// app.post("/register",function(req,res){
// 	var newUser = new User({username:req.body.username});
// 	User.register(newUser, req.body.password, function(err, user){
// 		if(err){
// 			console.log(err);
// 			return res.render("/register");
// 		}
// 		passport.authenticate("local")(req, res,function(){
// 			res.redirect("/login");
// 		});
// 	});
// });

// app.get("/", function(req,res){
// 	res.send("client started on root");
// })
// app.get("/login",function(req,res){
// 	res.render("login");
// });

// app.post("/login",passport.authenticate("local",
// 	{
// 		successRedirect:"/telesales",
// 		failureRedirect:"/login"
// 	}),function(req,res){
// });

// app.get("/telesales",isLoggedIn,function(req,res){
// 	res.render("telesales");
// });	

// app.get("/logout", function(req,res){
// 	req.logout();
// 	res.redirect("/login");
// });

// function isLoggedIn(req,res,next){
// 	if(req.isAuthenticated()){
// 		return next();
// 	}
// 	return res.redirect("/login");
// }

// var employeeProfile;

// app.get("/usermanagement",function(req,res){
// 	res.render("usermanagement");
// // 	var options = {		
// // 		uri:'https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',
// // 	method: 'GET',
// // 	headers: {
// // 	    'Content-Type': 'application/json'
// // 	}
// // };

// // request('https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',function(error, response, body){
// // //	request('http://localhost:3001/employee/profile',function(error, response, body){
// // 	res.render("usermanagement",{users:JSON.parse(response.body)});
// // 	});
	
// });

// app.post("/usermanagement",passport.authenticate("local",
// 	{
// 		// successRedirect:"/telesales",
// 		// failureRedirect:"/login"
// 	}),function(req,res){
// });

// app.get("/employeemanagement",function(req,res){	
// 	var options = {		
// 		uri:'https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',
// 		method: 'GET',
// 		headers: {
// 		    'Content-Type': 'application/json'
// 		}
// 	};
// 	request('https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',function(error, response, body){
// 	//	request('http://localhost:3001/employee/profile',function(error, response, body){
// 		res.render("employeemanagement",{users:JSON.parse(response.body)});
// 	});
			
// });
// app.get("/usermanagement/:Id",function(req,res){	
// 	var options = {		
// 		uri:'https://gdp-server-manikandanmuthuv.c9users.io/employee/profile/:Id',
// 		method: 'GET',
// 		headers: {
// 		    'Content-Type': 'application/json'
// 		}
// 	};
// 	request(options,function(error, response, body){
// 	//	request('http://localhost:3001/employee/profile',function(error, response, body){
// 		res.render("usermanagement",{users:JSON.parse(response.body)});
// 	});
			
// });

// app.get("/addnewemployee",function(req,res){		
// 		res.render("newemployee");
// });
// app.post("/addnewemployee",function(req,res){
// 	console.log("add new employee");
// });


var port = 3001;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('gdmp-client running on port ' + port + '.');
});



routers(app);

module.exports = app;

//<td><a class="btn mini blue-stripe" href="{site_url()}admin/editFront/1">Edit</a></td>