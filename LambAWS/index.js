// 1 validar campos del estudiante bloqueado, cerrado y retirado sean N pasar a frontend
// 2 valida estado del estudiante, Frontend

// 3 Servicio de consultar si el usuario existe en la base de datos: return
// 4 Consulta log votos si el usuario ya voto: return respuesta la misma que el 7
// 6 inserta ó modifica el Usuario Estudiante en la base de datos
// 7 por ultimo dispara ó responde con el servicio de Consejos, 
//   tambien puede redireccionarlo ó disparar este servicio hasta el pto 6 dentro del Componente Login

		/* data retornada del servicio de UR
			Data: {
				

				Data para validar desde el Frontend si es correcta se consume el servicio
				tipoest,
				bloqueado,
				cerrado,
				retirado
				nombreFacultad para obtener el VcId'S de los consejos
				programa, //es el codigo del programa
				nombreprograma,
				semestre,

				/* para validar service 
				documento,
				tipoDocumento,

				datos sacados de login de Ofice365
				VesNombre
				VesEmail
				
				

			}
		*/

/* *************************************************** */
//https://www.npmjs.com/package/mysql-qb
var AWS 			= require('aws-sdk');
//AWS.config.update({region:'us-east-1'});
var lambda 			= new AWS.Lambda();
var mysql 			= require('mysql');
var request 		= require('request');
var parseXml 		= require('xml2js').parseString;
var QueryBuilder 	= require('mysql-qb');
var EncryptDecrypt 	= require("./EncryptDecrypt.js");
//var moment 			= require("moment");
var _ 				= require('underscore');

var Ajv 			= require('ajv');
var ajv 			= new Ajv({allErrors: true});
var fs 				= require('fs');
var schema 			= JSON.parse(fs.readFileSync('schema.json', 'utf8'));
var validate 		= ajv.compile(schema);

// **** valida permisos a consultas
function getQueryToValidate(_event, _table, _mqb){
	if( _event.context["authorizer-principal-id"] === "" ){
		return _mqb.select('name').from('publictables').where({'name': _table, 'useGeneric' : 'TRUE'}).build();
	}
	else{ //No Encriptar, has session
		var obj = JSON.parse(EncryptDecrypt.decryptText(_event.context["authorizer-principal-id"]));
		return _mqb.select('tablename').from('allow_tables').where({'id_usuario' : obj.id, 'tablename' : _table}).build();
	}
}

function encryptObjectIfNedd(event, object){
	if( event.context["authorizer-principal-id"] === "" ){ //Encriptar
		//console.log("[encryptObjectIfNedd]: "+JSON.stringify(object));
		return EncryptDecrypt.encryptText(JSON.stringify(object));
	}
	else{ //No Encriptar, has session
		return object
	}
}

/**
 * parseInput
 *
 * @param      event  Event pass from lambda
 * @param      object  Object to parser
 * @return     object  JSON Object in plain text
 */
function parseInput(event, object){
	if( event.context["authorizer-principal-id"] === "" ){ //Encriptar
		//console.log("[parseInput]: "+JSON.stringify(object));
		//console.log("[parseInput Decypt]: "+EncryptDecrypt.decryptText(object.jsonParams));
		
		return JSON.parse(EncryptDecrypt.decryptText(object.jsonParams));
	}
	else{ //No Encriptar, has session
		return object
	}
}

/**
 * Validate JSON Schema, if not valid finish the process
 *
 * @param      _objValidate  The object validate
 * @param      _event        The event
 * @param      _response     The response
 * @param      _callback     The callback
 */
function validateSchemaInputJson(_objValidate, _event, _response, _callback, _callbackContinue){
	var valid = validate(_objValidate);
  	if (!valid){
  		//console.log('[validateSchemaInputJson] NO Valid!');
  		_response.success = false;
  		_response.error = true;
  		_response.message = ajv.errorsText(validate.errors);
  		_callback(null, encryptObjectIfNedd(_event, _response));
  	}
  	else{
  		//console.log('[validateSchemaInputJson] Valid!');
  		_callbackContinue();
  	}
}

exports.handler = function (event, context, callback) {
 	//console.log("test");
	EncryptDecrypt.setParams("aes256", event["stage-variables"].Prox_keyAES, event["stage-variables"].Prox_keyIV);

 	var response = {
        success 	: true,
		error 		: false,
		message		: "All OK"
    };	

 	var objConexion = {
	    host     : event["stage-variables"].host_db,
        user     : event["stage-variables"].user_db,
        password : event["stage-variables"].password_db,
        database : event["stage-variables"].name_db,
        multipleStatements: true
    };

    var objectRequest = parseInput(event, event["body-json"]);// la data que llega del Frontend
    
    validateSchemaInputJson(objectRequest, event, response, callback,function(){
		// console.log("Continue...");
		valExistEstudiante(objConexion, response, event["stage-variables"], event, objectRequest, callback, function(existEstudiante){
			// console.log("existe el usuario con C.C. " + existEstudiante);
			guardaEstudiante(existEstudiante, objConexion, response, event["stage-variables"], event, objectRequest, callback, function(guardarEstudiante){
				// console.log("guarda o actualiza el usuario " + guardarEstudiante);
				consejosEstudi(guardarEstudiante, objConexion, response, event["stage-variables"], event, objectRequest, callback, function(consejoEstudiante){
							
					// Consulta los consejos
					//console.log("los consejos son: " + JSON.stringify(consejoEstudiante));
					/* var losConsejo = JSON.parse(JSON.stringify(consejoEstudiante));
					var datoConsejos = jsonArrayQuery("VcId",losConsejo);
					console.log("array consejos " + datoConsejos); */
					/* guardPlanXEstud(guardarEstudiante, objConexion, response, event["stage-variables"], event, objectRequest, callback, function(planXEstud){
						console.log("respuesta planXEstud " + planXEstud);
					}); */
					
				});
			});
			
		});
	});


}

// Servicio de consultar si el usuario existe en la base de datos:

function valExistEstudiante(_objConexion, _response, _stageVars, _event, _objectRequest, _callbackKill, _callbackComplete){
	var queryCheck = "SELECT * FROM "+_stageVars["vot_estudiantes"]+" WHERE VresNumDocumento = ?";
	// console.log("queryCheck " + queryCheck);
	queryCheck = mysql.format(queryCheck, [_objectRequest.VresNumDocumento]);

	execQuery(_objConexion, queryCheck, _response, _event, _callbackKill,function(resultSet){
		_callbackComplete(resultSet[0]["VresNumDocumento"]);
	});
	
}

// inserta ó modifica el Usuario Estudiante en la base de datos:
function guardaEstudiante(_existEstudiante, _objConexion, _response, _stageVars, _event, _objectRequest, _callbackKill, _callbackComplete){
	
	if(_existEstudiante){
		var queryUpdate = "UPDATE "+_stageVars["vot_estudiantes"]+" SET VresTipoDocumento='"+_objectRequest.VresTipoDocumento+"', VesNombre='"+_objectRequest.VesNombre+"', VesEmail='"+_objectRequest.VesEmail+"' WHERE VresNumDocumento = ? ";
		queryUpdate = mysql.format(queryUpdate, [_objectRequest.VresNumDocumento]);

		execQuery(_objConexion, queryUpdate, _response, _event, _callbackKill,function(resultSet){
			_callbackComplete(resultSet["affectedRows"]);
		});
	}else{
		var queryInsert = "INSERT INTO "+_stageVars["vot_estudiantes"]+
		" (VresTipoDocumento,VresNumDocumento,VesNombre,VesEmail) VALUES (?,?,?,?) ";
		var params = [_objectRequest.VresTipoDocumento,_objectRequest.VresNumDocumento,_objectRequest.VesNombre,_objectRequest.VesEmail];
		queryInsert = mysql.format(queryInsert, params);
		execQuery(_objConexion, queryInsert, _response, _event, _callbackKill,function(resultSet){
			_callbackComplete(resultSet["insertId"]);
		});
	}	
	
}
// Consulta log votos si el usuario ya voto y
// por ultimo dispara ó responde con el listado de Consejos:
function consejosEstudi(_guardarEstudiante, _objConexion, _response, _stageVars, _event, _objectRequest, _callbackKill, _callbackComplete){
	
	var queryLogConse = "SELECT * FROM "+_stageVars["vot_log_votaciones"]+" logVo LEFT JOIN "+_stageVars["vot_estudiantes"]+" estu ON logVo.VlgEstudiante=estu.VesId WHERE VresNumDocumento = ?";
	queryLogConse = mysql.format(queryLogConse, [_objectRequest.VresNumDocumento]);
	var consejosLog = "";
	execQuery(_objConexion, queryLogConse, _response, _event, _callbackKill,function(resultSet){
		consejosLog = resultSet[0]["VlgFechaVotacion"];
	});
	console.log("fecha voto consejo " + consejosLog);
	// function para recorrer el JSON-Array	
	var codPlanes = jsonArrayQuery("codigo",_objectRequest["infoPlanes"]);

	if (_guardarEstudiante) {
		var i;
		var objetRequest = JSON.parse(JSON.stringify(_objectRequest['infoPlanes']));
		console.log(" length planes " + objetRequest.length);
		for (i = 0; i < objetRequest.length; i++){
			
			var codPlanU = JSON.stringify(_objectRequest["infoPlanes"][i]["codigo"]);
			var semesXPlan = JSON.stringify(_objectRequest["infoPlanes"][i]["semestre"]);
			var queryIdPlan = "SELECT VplId FROM "+_stageVars["vot_plan"]+" WHERE VplCodigo = " + codPlanU + " ";
			//queryIdPlan = mysql.format(queryIdPlan, codPlanU);
			execQuery(_objConexion, queryIdPlan, _response, _event, _callbackKill,function(resultSet){
				var resulIdPlan = resultSet[0]["VplId"];
				/* console.log(' plan ' + codPlanU);
				console.log('semestre ' + semesXPlan);
				console.log('id plan ' + resulIdPlan); */
				// console.log('consulta ' + queryIdPlan);

					// ****** Insert datos
				if (resulIdPlan) {
					var queryInsert = "INSERT INTO "+_stageVars["vot_estudiante_x_planes"]+
					" (VepEstudiante,VepPlan,VepSemestre) VALUES (?,?," + semesXPlan + ") ";
					var params = [_guardarEstudiante,resulIdPlan];
					queryInsert = mysql.format(queryInsert, params);
					// console.log('Insert de plan x estud ' + queryInsert);
					execQuery(_objConexion, queryInsert, _response, _event, _callbackKill,function(resultSet){
						// console.log(resultSet["insertId"]);
					});
				} else {
					console.log('No existe plan ');
				}
				
			
			});
			
			
		}

		if (consejosLog) {
			
			var queryCheck = "SELECT conse.VcNombre, conse.VcId, conse.VcFoto, logVo.VlgFechaVotacion FROM "+_stageVars["vot_consejo"]+" conse LEFT JOIN "+_stageVars["vot_log_votaciones"]+" logVo ON conse.VcId = logVo.VlgConsejo LEFT JOIN "+_stageVars["vot_plan"]+" plan ON plan.VplConsejo = conse.VcId WHERE VplCodigo IN (" + codPlanes + ") ";
			console.log("Consejos del estudiante: " + queryCheck);
	
			execQuery(_objConexion, queryCheck, _response, _event, _callbackKill,function(resultSet){
				_callbackComplete(resultSet);
			});
		} else {
			var queryCheck = "SELECT * FROM "+_stageVars["vot_consejo"]+" conse LEFT JOIN "+_stageVars["vot_plan"]+" plan ON plan.VplConsejo = conse.VcId WHERE VplCodigo IN (" + codPlanes + ") ";
			console.log("Consejos del estudiante sin log voto: " + queryCheck);
	
			execQuery(_objConexion, queryCheck, _response, _event, _callbackKill,function(resultSet){
				_callbackComplete(resultSet);
			});
		}

	} else {
		_callbackComplete('No se encuentran consejos, Intente nuevamente');
	}

}

// recorre los Json array jsonArrayQuery(campo  a consultar, Json array]);
function jsonArrayQuery(_campoArray, _jsonArray){
	
	var i = 0;
	var objetRequest = JSON.parse(JSON.stringify(_jsonArray));
	
	var codPlanD = "";
	// console.log("campos array " + _campoArray);
	console.log("Json " + objetRequest);

	for (i; i < objetRequest.length; i++){
		
		if (i == (objetRequest.length - 1)) {
			var codPlanU = JSON.stringify(_jsonArray[i][_campoArray]) + ",";
		} else {
			var codPlanU = JSON.stringify(_jsonArray[i][_campoArray]);
		}
		var codPlanes = codPlanU.concat(codPlanD);
		var codPlanD = codPlanes;	
		console.log("Valor Array: " + codPlanU);	
	}
	console.log("array " + codPlanes);
	// console.log("Objetos Request " + objetRequest.length);
	return codPlanes;
}
// Conexion  y execQuery a BD
function execQuery(_objConexion, _query, _response, _event, _callbackKill, _callbackComplete){
	// console.log("====================== execQuery START ======================");
	var _connection = mysql.createConnection(_objConexion);
	_connection.query(_query, function(err, results) {
		// console.log("err: "+err);
		if (err){
			_response.success = false;
			_response.error = true;
			_response.message = err;
			_callbackKill(null, encryptObjectIfNedd(_event, _response));
		}else{
			var rowsValiation = JSON.parse(JSON.stringify(results));
			/* console.log("resulSet");
			console.log(rowsValiation);
			console.log("====================== execQuery END ======================"); */
			_callbackComplete(rowsValiation);
		}
	});
	_connection.end();
};