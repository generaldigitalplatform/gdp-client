var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	jobManagementRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');

module.exports = function(app){	

	router.use('/',jobManagementRoutes);

	jobManagementRoutes.get("/jobmanagement",function(req,res){
	res.render("jobmanagement");
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