var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	registerRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');

module.exports = function(app){	

	router.use('/',registerRoutes);

	registerRoutes.get("/register",function(req,res){
	res.render("register");
	});

	registerRoutes.post("/register",function(req,res){
	var options = {		
		uri:config.register,
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
			console.log("register successfully");
			res.redirect("/login");
		}
		else if("error" in body){
			if(body["error"]=='You must enter EmployeeID'){
		 	req.flash("msg","You must enter EmployeeID");
            res.locals.messages = req.flash();	
			return res.render("register", {message:"You must enter EmployeeID"});
			}
		 	else if(body["error"]=='You must enter an email address'){
		 	req.flash("msg","You must enter an email address");
            res.locals.messages = req.flash();	
			return res.render("register", {message:"You must enter valid email address"});
			}
			else if(body["error"]=='You must enter Name'){
		 	req.flash("msg","You must enter Name");
            res.locals.messages = req.flash();	
			return res.render("register", {message:"You must enter Name"});
			}		
			else if(body["error"]=='You must enter a Password'){
		 	req.flash("msg","You must enter a Password");
            res.locals.messages = req.flash();	
			return res.render("register", {message:"You must enter a Password"});
			}
			else if(body["error"]=='Existing User : EmployeeID/EmailID is already in use'){
		 	req.flash("msg","Existing User : EmployeeID/EmailID is already in use");
            res.locals.messages = req.flash();	
			return res.render("register", {message:"Existing User : EmployeeID/EmailID is already in usee"});
			}
			else{
				return res.render("register");
			}
		}		
	}	

	});
	});
	app.use('/',router);
}