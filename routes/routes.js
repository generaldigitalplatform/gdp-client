var cors			= require('cors'),
	bodyParser		= require('body-parser'),
	passport		= require('passport'),
	localStrategy	= require('passport-local'),
	mongoose		= require('mongoose'),
	User			= require('../models/user'),
	request			= require('request'),
 	http 			= require("http"),
    https 			= require("https");

var express = require('express');
var router = express.Router(),
	signinRoutes = express.Router(),
	customerfeedbackRoutes = express.Router(),
	employeeRoutes = express.Router();



//passport.use(User.createStrategy());


module.exports = function(app){
	
	router.use('/',signinRoutes);
	signinRoutes.get("/register",function(req,res){
	res.render("register");
	});

	signinRoutes.post("/register",function(req,res){
		var newUser = new User({username:req.body.username});
		User.register(newUser, req.body.password, function(err, user){
			if(err){
				console.log(err);
				return res.render("register");
			}
			passport.authenticate("local")(req, res,function(){
				res.redirect("/login");
			});
		});
	});

signinRoutes.get("/", function(req,res){
	res.send("client started on root");
})
signinRoutes.get("/login",function(req,res){
	res.render("login");
});

signinRoutes.post("/login",passport.authenticate("local",
	{
		successRedirect:"/telesales",
		failureRedirect:"/login"
	}),function(req,res){
});

router.use('/',customerfeedbackRoutes);

customerfeedbackRoutes.get("/telesales",isLoggedIn,function(req,res){
	res.render("telesales");
});	

signinRoutes.get("/logout", function(req,res){
	req.logout();
	res.redirect("/login");
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	return res.redirect("/login");
}

router.use('/',employeeRoutes);

employeeRoutes.get("/usermanagement",function(req,res){
	res.render("usermanagement");
// 	var options = {		
// 		uri:'https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',
// 	method: 'GET',
// 	headers: {
// 	    'Content-Type': 'application/json'
// 	}
// };

// request('https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',function(error, response, body){
// //	request('http://localhost:3001/employee/profile',function(error, response, body){
// 	res.render("usermanagement",{users:JSON.parse(response.body)});
// 	});
	
});

employeeRoutes.post("/usermanagement",passport.authenticate("local",
	{
		// successRedirect:"/telesales",
		// failureRedirect:"/login"
	}),function(req,res){
});

employeeRoutes.get("/employeemanagement",function(req,res){	
	var options = {		
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',
		method: 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};
	request('https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',function(error, response, body){
	//	request('http://localhost:3001/employee/profile',function(error, response, body){
		res.render("employeemanagement",{users:JSON.parse(response.body)});
	});
			
});
employeeRoutes.get("/usermanagement/:Id",function(req,res){	
	var options = {		
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/employee/profile/:Id',
		method: 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};
	request(options,function(error, response, body){
	//	request('http://localhost:3001/employee/profile',function(error, response, body){
		res.render("usermanagement",{users:JSON.parse(response.body)});
	});
			
});

employeeRoutes.get("/addnewemployee",function(req,res){		
		res.render("newemployee");
});
employeeRoutes.post("/addnewemployee",function(req,res){
	var options = {	
	headers:{
		    'Content-Type': 'application/json'
		},	
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/employee/profile',
		method: 'POST',
		form:req.body		
	};
	request(options,function(error, response, body){
	//	request('http://localhost:3001/employee/profile',function(error, response, body){
		res.render("newemployee");
	});
});


app.use('/',router);

}