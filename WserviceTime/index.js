//https://www.npmjs.com/package/mysql-qb
var AWS 			= require('aws-sdk');
//AWS.config.update({region:'us-east-1'});
var lambda 			= new AWS.Lambda();
var request 		= require('request');


exports.handler = async function (event){
	var date = new Date();
	var habilitado = Boolean;
    var current_hour = date.getHours();
	console.log('time ', current_hour);
	if (current_hour > 6 && current_hour < 18) {
		habilitado = true;
	} else {
		habilitado = false;
	}
	console.log('Habilitado ', habilitado);
		habilitado = false;
  	return {current_hour, habilitado}
};
