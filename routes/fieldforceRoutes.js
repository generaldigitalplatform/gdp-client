var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	fieldforceRoutes= express.Router()
	jQuery		= require('jquery');

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
    	email: req.body.email,
	    firstname :req.body.firstname,
		 lastname :req.body.lastname,
		 primaryphone: Number(req.body.primaryphone),
		 secondaryphone: Number(req.body.secondaryphone),		
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
				var body = JSON.parse(body);						
				if(body.hasOwnProperty('errors')){
				 	if(body.errors.hasOwnProperty('email')){
				 	req.flash("msg","You must enter an valid email address");
		            res.locals.messages = req.flash();
		            //return res.locals.messages;	
					}
				 	if(body.errors.hasOwnProperty('employeeid')){
				 	req.flash("msg","You must enter an employeeid");
		            res.locals.messages = req.flash();
		            //return res.redirect('/jobmanagement');	
					}
				 	if(body.errors.hasOwnProperty('firstname')){
				 	req.flash("msg","You must enter an field force name");
		            res.locals.messages = req.flash();
		           // return res.redirect('/jobmanagement');	
					}
				 	if(body.errors.hasOwnProperty('primaryphone')){
				 	req.flash("msg","You must enter field force contact number");
		            res.locals.messages = req.flash();
		           //return res.redirect('/jobmanagement');	
					}
				}
				else{
					return res.redirect('/jobmanagement');
				}
			}
			else if(body=='Unauthorized'){
				req.flash("msg","Unauthorized. Please login and try again.");
                res.locals.messages = req.flash();		
				return res.render("login", {message:"Unauthorized. Please login and try again."});				
			}
			else{				
				return res.redirect('/jobmanagement');
			}
		});
});
app.use('/',router);
}