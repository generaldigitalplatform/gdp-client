var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	jobManagementRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');
	job		= 	require('../controllers/taskmanagement');

module.exports = function(app){	

	router.use('/',jobManagementRoutes);

	jobManagementRoutes.get("/jobmanagement",function(req,res){
	
	var token = req.cookies.auth;

	var options = {		
		uri:config.job,
		method: 'GET',
		headers: {'Content-Type': 'application/json',"Authorization": token}		
	}

	request(options,function(error, response, body){
		if(!util.verifyJson(body)){
			var jobs = [];		
			jobs.push(JSON.parse(body));
			// var jobs = [];
			// for(var data in resdata){
			// 	jobs.push(resdata[data]);
			// }
			//var jobs = Object.keys(resdata).map(function(k) { return resdata[k] });
			//Object.keys(resdata).map(function() { jobs })
			//util.EditJob(jobs);
			res.render("jobmanagement",{jobs});
		};
		if(body=='Unauthorized'){
				req.flash("msg","You are Unauthorized view Job Management.");
                res.locals.messages = req.flash();		
				return res.render("login", {message:"You are Unauthorized view Job Management."});				
			}
	});
});
	jobManagementRoutes.post("/jobmanagement",function(req,res){ 
	var options = {		
		uri:config.job,
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		form:reqbody
	}
	request(options,function(error, response, body){
		if(!util.verifyJson(body)){
			res.render("jobmanagement",{tasks:JSON.parse(body)});
		};
	});
});
app.use('/',router);
}