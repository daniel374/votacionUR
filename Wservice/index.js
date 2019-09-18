//https://www.npmjs.com/package/mysql-qb
var AWS 			= require('aws-sdk');
//AWS.config.update({region:'us-east-1'});
var lambda 			= new AWS.Lambda();
var mysql 			= require('mysql');
var request 		= require('request');
var parseXml 		= require('xml2js').parseString;
var QueryBuilder 	= require('mysql-qb');
var EncryptDecrypt 	= require("./EncryptDecrypt.js");


exports.handler = function (event, context, callback){

	console.log(event["body-json"]["body"]);
	var response = {
		success 	: true,
		error 		: false,
		message		: "All OK"
	};	

	
	var options = {
		url: event["stage-variables"]["url_WsRosario"],
		headers : {
			"Content-Type": "tex/xml"
		},
    	method: "POST",
		body: event["body-json"]["body"],
    	timeout: 80000
	};

	console.log("request " + options.body);
	request(options, function (error, response, body) {
		console.log('error:', error); // Print the error if one occurred
	  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  	console.log('body:', body); // Print the xml response.


		if(error){
			response.error = true;
			response.success = false;
			callback(null, response);
		}
		else{//body["wss:return"]
			parseXml(body, function (err, resultJSON) {
			
				jsonResponse = JSON.stringify(resultJSON);
				console.log(`"[parseXml] resultJSON: "${jsonResponse}`);
    			
    			callback(null, response);

			});
		}
	});

};
