var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	fieldforceRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');

module.exports = function(app){	

	router.use('/',fieldforceRoutes);

	fieldforceRoutes.get("/registerfieldforce",function(req,res){
	res.render("fieldforce");
	});

	fieldforceRoutes.post("/registerfieldforce",function(req,res){    
    var reqbody={
    	employeeid:req.body.employeeid,
	    firstname :req.body.firstname,
		 lastname :req.body.lastname,
		 primaryphone: req.body.primaryphone,
		 secondaryphone: req.body.secondaryphone,
		 employeeid: req.body.employeeid,
		 worklocations :[req.body.worklocations.split(",")],
		 workpincodes :[req.body.workpincodes.split(",").map(Number)]
    }
	var options = {		
		uri:config.registerfieldforce,
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		form:reqbody
	}
	request(options,function(error, response, body){
		if(!util.verifyJson(body)){
		};
	});
});
app.use('/',router);
}