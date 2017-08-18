var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	signinRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');

var token;

module.exports = function(app){	

	router.use('/',signinRoutes);

	signinRoutes.get("/", function(req,res){
	res.redirect("/login");
	})

	signinRoutes.get("/login",function(req,res){
		res.render("login");
	});

	signinRoutes.post("/login", function(req, res){
	var options = {		
				uri:config.login,
				method: 'POST',
				headers: {
				'Content-Type': 'application/json'
				},
				form:req.body
			};
		request(options,function(error, response, body){			
			if(!util.verifyJson(body)){			
				var body = JSON.parse(body);
				if("token" in body){			
					console.log("login successfully");
					token = body.token;					
					res.cookie('employee',body.user.employeeid + "_" + body.user.firstname);
					res.cookie('employeeid',body.user.employeeid);
					res.cookie('firstname',body.user.firstname);
					res.cookie('lastname',body.user.lastname);
					res.cookie('primaryphone',body.user.primaryphone);
					res.cookie('secondaryphone',body.user.secondaryphone);
					res.cookie('email',body.user.email);
					res.cookie('auth',body.token);
					res.redirect("/telesales");
				}			
				if("error" in body){
				 	if(body["error"]=='Login failed. Please try again.'){
				 	req.flash("msg","Login Failed. If you are not registered yet, please register and login again");
	                res.locals.messages = req.flash();			
					console.log("Login failed. Please try again.");
					return res.render("register", {message:"Login Failed. Please enter the valid email and password. If you are not registered yet, please register and login again"});
					}
				}
			}
			if(body=='Unauthorized'){
				req.flash("msg","Login Failed. You are Unauthorized to login. If not registered yet, please register and login");
                res.locals.messages = req.flash();		
				return res.render("login", {message:"Login Failed. You are Unauthorized to login. If you are not registered yet, please register and login"});				
			}
		});
	});

signinRoutes.get("/logout", function(req,res){
	req.logout();
	res.redirect("/login");
});

	app.use('/',router);
}