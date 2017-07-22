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
		if("error" in body){
		 	if(body["error"]=='You must enter an email address'){
		 	req.flash("msg","You must enter an email address");
            res.locals.messages = req.flash();	
			return res.render("register", {message:"You must enter valid email address"});
			}
		}
		if("error" in body){
		 	if(body["error"]=='That email address is already in use'){
		 	req.flash("msg","That email address is already in use");
            res.locals.messages = req.flash();	
			return res.render("register", {message:"email address is already in use"});
			}
		}
	}	

	});
	});
	app.use('/',router);
}