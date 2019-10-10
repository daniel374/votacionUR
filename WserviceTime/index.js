//https://www.npmjs.com/package/mysql-qb
var AWS 			= require('aws-sdk');
//AWS.config.update({region:'us-east-1'});
var lambda 			= new AWS.Lambda();
var request 		= require('request');


exports.handler = async function (event){
	var date = new Date();
	var habilitado = Boolean;
	var current_hour = date.getHours();
	var current_date = date.toISOString();
	var res_date = current_date.split('T');
	console.log('fecha ', current_date);
	console.log('time ', current_hour);
	console.log('fecha sola ',res_date);
	if (res_date[0] == '2019-10-10' || res_date[0] == '2019-10-11') {
		if (current_hour > 6 && current_hour < 18) {
			habilitado = true;
		} else {
			habilitado = false;
		}
	} else {
		habilitado = false;
	}
	
	console.log('Habilitado ', habilitado);
		habilitado = false;
  	return {current_hour, habilitado, res_date}
};
