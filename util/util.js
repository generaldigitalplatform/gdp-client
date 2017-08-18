// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// const { document } = (new JSDOM('')).window;
// global.document = document;

// // Load jQuery with the simulated jsdom window.
// $ = require('jquery')(document.defaultView);

exports.verifyJson = function(input){
   try {
      JSON.parse(input);
   } catch(ex){
      // invalid 
      return ex.message;
   }
   // valid 
   return false;
}
exports.TaskIdGenerator =  function () {
     
    this.length = 6;
    this.timestamp = +new Date;

    var getRandomInt = function( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    var ts = this.timestamp.toString();
    var parts = ts.split( "" ).reverse();
    var id = "";

    for( var i = 0; i < this.length; ++i ) {
    var index = getRandomInt( 0, parts.length - 1 );
    id += parts[index];  
    }     
    return id;  
}
exports.EditJob = function (data){    
 
 var metadata = [];
        metadata.push({ name: "name", label: "NAME", datatype: "string", editable: true});
        metadata.push({ name: "firstname", label:"FIRSTNAME", datatype: "string", editable: true});
        metadata.push({ name: "age", label: "AGE", datatype: "integer", editable: true});
        metadata.push({ name: "height", label: "HEIGHT", datatype: "double(m,2)", editable: true});
        metadata.push({ name: "country", label: "COUNTRY", datatype: "string", editable: true});
        metadata.push({ name: "email", label: "EMAIL", datatype: "email", editable: true});
        metadata.push({ name: "freelance", label: "FREELANCE", datatype: "boolean", editable: true});
        metadata.push({ name: "lastvisit", label: "LAST VISIT", datatype: "date", editable: true});


        editableGrid = new EditableGrid("DemoGridJsData");
        editableGrid.load({"metadata": metadata, "data": data});
        editableGrid.renderGrid("tablecontent", "testgrid");


    }
   