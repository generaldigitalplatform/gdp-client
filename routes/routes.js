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
	employeeRoutes = express.Router(),
	taskRoutes = express.Router(),
	surveyRoutes = express.Router();

module.exports = function(app){	
	var username;
	router.use('/',surveyRoutes);
	surveyRoutes.post("/savesurvey",function(req,res){	
		
		var token = req.cookies.auth;
				
		if("CustomerProfile" in req.body){
			var CustomerProfile = req.body.CustomerProfile;
			CustomerProfile["CreatedBy"] = username;
			var cusprofile = {		
				uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/customer/profile',
				method: 'POST',
				headers: {'Content-Type': 'application/json',"Authorization": token},
				form:CustomerProfile
			};	
			request(cusprofile,function(error, response, body){
				if(!VerifyJson(body)){
				 	var customerModel = JSON.parse(body);
				 	var customerId = customerModel._id
				 	if("Feedback" in req.body){
					 	var ProductFeedback = req.body.Feedback;
					 	ProductFeedback["CustomerId"] = customerId;    
						var cussurvey = {		
							uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/customer/feedback',
							method: 'POST',
							headers: {'Content-Type': 'application/json',"Authorization": token},
							form:ProductFeedback
						};
						request(cussurvey,function(error, response, body){				
						});	 
				 	}
		            if("JobDetails" in req.body) {
		            	var JobDetails = req.body.JobDetails;
		            	JobDetails["CustomerId"] = customerId;
			   		   	var job = {		
							uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/employee/job',
							method: 'POST',
							headers: {'Content-Type': 'application/json',"Authorization": token},
							form:JobDetails
						};
						request(job,function(error, response, body){
							});						
		            }	            		
			}	
		});
	
	}
});

// router.use('/',signinRoutes);
// signinRoutes.get("/register",function(req,res){
// res.render("register");
// });

// signinRoutes.post("/register",function(req,res){
// 	var options = {		
// 		uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/auth/register',
// 		method: 'POST',
// 		headers: {
// 		'Content-Type': 'application/json'
// 		},
// 		form:req.body
// 	};
// 	request(options,function(error, response, body){
// 	if(!VerifyJson(body)){	
// 		var body = JSON.parse(body);
// 		if("token" in body){			
// 			console.log("register successfully");
// 			res.redirect("/login");
// 		}
// 		if("error" in body){
// 		 	if(body["error"]=='You must enter an email address'){			
// 			console.log("please enter valid email");
// 			return res.render("register");
// 			}
// 		}
// 		if("error" in body){
// 		 	if(body["error"]=='That email address is already in use'){
// 		 	req.flash("msg","That email address is already in use");
//             res.locals.messages = req.flash();			
// 			console.log("email is already registered");
// 			return res.render("register", {message:"email address is already in use"});
// 			}
// 		}
// 	}	

// 	});
// });

// signinRoutes.get("/", function(req,res){
// 	res.redirect("/login");
// })
// signinRoutes.get("/login",function(req,res){
// 	res.render("login");
// });

// signinRoutes.post("/login", function(req, res){
// 	var options = {		
// 				uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/auth/login',
// 				method: 'POST',
// 				headers: {
// 				'Content-Type': 'application/json'
// 				},
// 				form:req.body
// 			};
// 		request(options,function(error, response, body){			
// 			if(!VerifyJson(body)){			
// 				var body = JSON.parse(body);
// 				if("token" in body){			
// 					console.log("login successfully");
// 					username = body.user.employeeId + "_" + body.user.firstname;
// 					res.cookie('auth',body.token);
// 					res.redirect("/telesales");
// 				}			
// 				if("error" in body){
// 				 	if(body["error"]=='Login failed. Please try again.'){
// 				 	req.flash("msg","Error Occured");
// 	                res.locals.messages = req.flash();			
// 					console.log("Login failed. Please try again.");
// 					return res.render("register", {message:"Login failed. Please try again."});
// 					}
// 				}
// 			}
// 			if(body=='Unauthorized'){
// 				req.flash("msg","Login failed. Please try again.");
//                 res.locals.messages = req.flash();		
// 				return res.render("login", {message:"Login failed. Please try again."});				
// 			}
// 		});
// });
//,passport.authenticate("local",
// 	{
// 		successRedirect:"/telesales",
// 		failureRedirect:"/login"
// 	}),function(req,res){
// });

router.use('/',customerfeedbackRoutes);

function VerifyJson(input){
   try {
      JSON.parse(input);
   } catch(ex){
      // invalid 
      return ex.message;
   }
   // valid 
   return false;
}
// customerfeedbackRoutes.get("/telesales",function(req,res){
// 	var token = req.cookies.auth;
// 	var options = {		
// 				uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/auth/protected',
// 				method: 'GET',
// 				headers: {'Content-Type': 'application/json',"Authorization": token}					
// 			};
// 	request(options,function(error, response, body){			
// 			if(!VerifyJson(body)){
// 				var body = JSON.parse(body);
// 				if("content" in body){
// 					if(body["content"]='Success'){			
// 						console.log("authenticate successfully");
// 						res.render("telesales");
// 					}
// 				}
// 			}
// 			if(body=='Unauthorized'){
// 				req.flash("msg","Unauthorized");
//                 res.locals.messages = req.flash();		
// 				return res.render("login", {message:"Unauthorized"});				
// 			}	
// 	});	
// });

// signinRoutes.get("/logout", function(req,res){
// 	req.logout();
// 	res.redirect("/login");
// });

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	return res.redirect("/login");
}

router.use('/',employeeRoutes);

employeeRoutes.get("/usermanagement",function(req,res){
	res.render("usermanagement");	
});

employeeRoutes.post("/usermanagement",passport.authenticate("local",
	{
		// successRedirect:"/telesales",
		// failureRedirect:"/login"
	}),function(req,res){
});

employeeRoutes.get("/employeemanagement",function(req,res){	
	var options = {		
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/employee/profile',
		method: 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};
	request('https://gdp-server-manikandanmuthuv.c9users.io/api/employee/profile',function(error, response, body){
	//	request('http://localhost:3001/employee/profile',function(error, response, body){
		res.render("employeemanagement",{users:JSON.parse(response.body)});
	});
			
});
employeeRoutes.get("/usermanagement/:Id",function(req,res){	
	var options = {		
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/employee/profile/:Id',
		method: 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};
	request(options,function(error, response, body){
		res.render("usermanagement",{users:JSON.parse(response.body)});
	});
			
});

router.use('/',taskRoutes);

taskRoutes.get("/taskmanagement",function(req,res){		
	var taskreq = {		
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/employee/job',
		method: 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};
	request(taskreq,function(error, response, body){
		res.render("taskmanagement",{tasks:JSON.parse(response.body)});
	});	
	//res.render("taskmanagement",{tasks:JSON.parse(res.body)});
			
});
taskRoutes.get("/taskmanagement/:Id",function(req,res){	
	var options = {		
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/employee/profile/:Id',
		method: 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};
	request(options,function(error, response, body){
		res.render("taskmanagement",{users:JSON.parse(response.body)});
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
		uri:'https://gdp-server-manikandanmuthuv.c9users.io/api/employee/profile',
		method: 'POST',
		form:req.body		
	};
	request(options,function(error, response, body){
		res.render("newemployee");
	});
});


// taskRoutes.get('/log', function(req, res, next) {
//   passport.authenticate('jwt', function(err, user) {
//     if (user){
//       if (user.role === 'admin'){
//         return res.send(200,{userContent:'you are a premium user'});
//       }else{
//         return res.send(403,{
//           'status': 403,
//           'code': 1, // custom code that makes sense for your application
//           'message': 'You are not a premium user',
//           'moreInfo': 'https://myawesomeapi.io/upgrade'
//         });
//       }
//     }else{
//       return res.send(401,{
//         'status': 401,
//         'code': 2, // custom code that makes sense for your application
//         'message': 'You are not authenticated.',
//         'moreInfo': 'https://myawesomeapi.io/docs'
//       });
//     }
//   })(req, res, next);
// });

app.use('/',router);

}