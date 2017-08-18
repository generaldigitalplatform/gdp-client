var express 		= require('express'),
	request			= require('request'),
	router 			= express.Router(),
	createJobRoutes = express.Router();

var config			= require('../config/database'),
	util			= require('../util/util');

// var jobId,jobDateTime,jobTitle,jobDescription,jobStatus,JobDetails,jobCreatedTime,jobLocation,JobDetailsJson;
// var jobId,jobDateTime,jobTitle,jobDescription,CustomerDetails,location,CustomerDetailsJson;

function getJobDetails(data,cookies){

  // var currentdate = new Date();
  // jobCreatedDate = currentdate.toISOString(); 
  // // var datetime = currentdate.getDate() + "/"
  //               + (currentdate.getMonth()+1)  + "/" 
  //               + currentdate.getFullYear() + " @ "  
  //               + currentdate.getHours() + ":"  
  //               + currentdate.getMinutes() + ":" 
  //               + currentdate.getSeconds();

  var JobIdGen = util.TaskIdGenerator(); 
 	jobId = {"JobId" : JobIdGen}   
    var JobScheduledTime = new Date(data.jobDateTime);
    jobISOTime = JobScheduledTime.toISOString();
	jobScheduledTime = {"JobScheduledTime" : jobISOTime}
    jobTitle = {"JobTitle" : data.JobTitle}
    jobDescription = {"JobDescription" : data.JobDescription}
    jobStatus = {JobStatus:"Unassigned"}
    jobLocation = {JobLocation:data.JobLocation}
    //jobCreatedTime = {JobCreatedTime:jobCreatedDate}
    JobDetails = Object.assign(jobId,jobTitle,jobDescription,jobLocation,jobScheduledTime,jobStatus); 
    

 	firstName = {"FirstName" : data.firstname}
    //lastName = {"LastName" : data.lastname}
    primaryPhone = {"PrimaryPhone" : Number(data.primaryphone)}
    //secondaryPhone = {"SecondaryPhone":Number(data.secondaryphone)}
    location = {"Location":data.JobLocation}
    address = {"Address":data.customeraddress}
    CustomerDetails = Object.assign(firstName,primaryPhone,location,address); 
    CustomerDetailsJson = {CustomerDetails}; 

    //employeeid = {"EmployeeId":cookies.employeeid}
    //firstName = {"FirstName" : cookies.firstname}
    //lastName = {"LastName" : cookies.lastname}
    // primaryPhone = {"PrimaryPhone" : Number(cookies.primaryphone)}
    // secondaryPhone = {"SecondaryPhone":Number(cookies.secondaryphone)}
    //email = {"Email":cookies.email}
    //EmployeeDetails = Object.assign(employeeid,firstName,lastName,primaryPhone,secondaryPhone,email); 
    //EmployeeDetailsJson = {EmployeeDetails};  

    return  Object.assign(JobDetails,CustomerDetailsJson);//,EmployeeDetailsJson);

}

module.exports = function(app){	

	router.use('/',createJobRoutes);

	createJobRoutes.post("/createjob", function(req, res){
	var token = req.cookies.auth;


	var data = getJobDetails(req.body,req.cookies);
	var options = {		
				uri:config.job,
				method: 'POST',		
				headers: {'Content-Type': 'application/json',"Authorization": token},
				form:data
			};
		request(options,function(error, response, body){			
			if(!util.verifyJson(body)){			
				var body = JSON.parse(body);						
				if("error" in body){
				 	if(body["error"]=='Create Job failed. Please try again.'){
				 	req.flash("msg","Create Job Failed.");
	                res.locals.messages = req.flash();			
					console.log("Create Job failed. Please try again.");
					return res.render("register", {message:"Create Job failed. Please try again."});
					}
				}
				else{
					return res.redirect('/jobmanagement');
				}
			}
			if(body=='Unauthorized'){
				req.flash("msg","Unauthorized. Please login and try again.");
                res.locals.messages = req.flash();		
				return res.render("login", {message:"Unauthorized. Please login and try again."});				
			}
			if(error){
				
				return res.redirect('/jobmanagement');
			}
		});
	});

	app.use('/',router);
}