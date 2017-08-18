// //util		= require('../util/util');

// // var jsdom = require('jsdom');
// // const { JSDOM } = jsdom;

// // const { document } = (new JSDOM('')).window;
// // global.document = document;

// // // Load jQuery with the simulated jsdom window.
// // $ = require('jquery')(document.defaultView);

// module.SaveJob = function(values){

//  	 var jobId = Number(values.JobId);
//         token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTZmNDM3NmZjNmRlYzAwMDQ0MDU1MmUiLCJlbXBsb3llZWlkIjoiMSIsImZpcnN0bmFtZSI6Im1hbmlrYW5kYW4iLCJsYXN0bmFtZSI6Im11dGh1IiwiZW1haWwiOiJtYW5pa2FuZGFuLm11dGh1dkBnZHMuY29tIiwicm9sZSI6ImVtcGxveWVlIiwiaWF0IjoxNTAyMTcyNDIxLCJleHAiOjE1MzM3MDg0MjF9.1ONnMJYU71MDdg2uV9omFvFJJcDOnk5cak2o_nr3Tv4";
//         url = "https://gdp-test-server.herokuapp.com/api/employee/job/"+jobId;
//                 // XMLHttpRequest preflight request
//         var xhr = new XMLHttpRequest();
//         xhr.open("PUT", url, true);
//         xhr.setRequestHeader("Authorization",token);
//         xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//         xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//         xhr.onload = function () {
//             console.log(xhr.responseText);

//             //if(!util.verifyJson(responseText)){
//             var jobs = [];      
//             jobs.push(JSON.parse(responseText));
//             // var jobs = [];
//             // for(var data in resdata){
//             //  jobs.push(resdata[data]);
//             // }
//             //var jobs = Object.keys(resdata).map(function(k) { return resdata[k] });
//             //Object.keys(resdata).map(function() { jobs })
//             res.render("jobmanagement",{jobs});
//       //  };

//         };
//         xhr.send(values);
 
//  }