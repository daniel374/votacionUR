// 3 Servicio de consultar si el usuario existe en la base de datos: return
// 4 Consulta log votos si el usuario ya voto: return respuesta la misma que el 7
// 5 inserta ó modifica el Usuario Estudiante en la base de datos
// 6 inserta plan x estudiante
// 7 por ultimo dispara ó responde con el servicio de Consejos, 
//   tambien puede redireccionarlo ó disparar este servicio hasta el pto 6 dentro del Componente Login

		/* data retornada del servicio de UR
			Data: {

				/* para validar service 
				documento,
				tipoDocumento,
				inserta plan x estudiante
				consulta los consejos

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
			guardaEstudiante(existEstudiante, objConexion, response, event["stage-variables"], event, objectRequest, callback, function(idEstudiante){
				// console.log("guarda o actualiza el usuario " + guardarEstudiante);
				estudXPlanes(idEstudiante, objConexion, response, event["stage-variables"], event, objectRequest, callback, function(estudXPlan){
				// console.log("guarda o actualiza el usuario " + guardarEstudiante);
					consejosEstudi(idEstudiante, objConexion, response, event["stage-variables"], event, objectRequest, callback, function(consejoEstudiante){
						response.data = consejoEstudiante;
						callback(null, encryptObjectIfNedd(event, response));
					});		
				});
			});
			
		});
	});
}

// Servicio de consultar si el usuario existe en la base de datos:
function valExistEstudiante(_objConexion, _response, _stageVars, _event, _objectRequest, _callbackKill, _callbackComplete){
	var queryCheck = "SELECT * FROM "+_stageVars["vot_estudiantes"]+" WHERE VresNumDocumento = ?";
	
	queryCheck = mysql.format(queryCheck, [_objectRequest.VresNumDocumento]);
	// console.log("queryCheck " + queryCheck);
	execQuery(_objConexion, queryCheck, _response, _event, _callbackKill,function(resultSet){
		if (resultSet[0]) {
			_callbackComplete(resultSet[0]);
		} else {
			_callbackComplete(null);
		}
	});
	
}

// inserta ó modifica el Usuario Estudiante en la base de datos:
function guardaEstudiante(_existEstudiante, _objConexion, _response, _stageVars, _event, _objectRequest, _callbackKill, _callbackComplete){
	
	if(_existEstudiante){
		// console.log('existe ' + _existEstudiante);
		var queryUpdate = "UPDATE "+_stageVars["vot_estudiantes"]+" SET VresTipoDocumento='"+_objectRequest.VresTipoDocumento+"', VesNombre='"+_objectRequest.VesNombre+"', VesEmail='"+_objectRequest.VesEmail+"' WHERE VresNumDocumento = ? ";
		queryUpdate = mysql.format(queryUpdate, [_objectRequest.VresNumDocumento]);

		execQuery(_objConexion, queryUpdate, _response, _event, _callbackKill,function(resultSet){
			_callbackComplete(_existEstudiante.VesId);
		});
	}else{
		// console.log('se inserta ' + _existEstudiante);
		var queryInsert = "INSERT INTO "+_stageVars["vot_estudiantes"]+
		" (VresTipoDocumento,VresNumDocumento,VesNombre,VesEmail) VALUES (?,?,?,?) ";
		var params = [_objectRequest.VresTipoDocumento,_objectRequest.VresNumDocumento,_objectRequest.VesNombre,_objectRequest.VesEmail];
		queryInsert = mysql.format(queryInsert, params);
		execQuery(_objConexion, queryInsert, _response, _event, _callbackKill,function(resultSet){
			_callbackComplete(resultSet["insertId"]);
		});
	}	
	
}

// guarda los planes del estudiante
function estudXPlanes(_idEstudiante, _objConexion, _response, _stageVars, _event, _objectRequest, _callbackKill, _callbackComplete){
	_objectRequest["infoPlanes"].forEach(function(element){
		var queryIdPlan = "SELECT VplId FROM "+_stageVars["vot_plan"] + " WHERE VplCodigo = '" + element["codigo"] + "'";
		execQuery(_objConexion, queryIdPlan, _response, _event, _callbackKill,function(resSetPlan){
			var resPlan = resSetPlan[0]["VplId"];
			var selecPlanXEstu = "SELECT * FROM " + _stageVars["vot_estudiante_x_planes"] + " WHERE VepPlan = " + resPlan + " AND VepEstudiante = " + _idEstudiante + " ";
			execQuery(_objConexion, selecPlanXEstu, _response, _event, _callbackKill,function(resPlanXEst){
				if (resPlanXEst.length === 0) {		
					var queryInsert = "INSERT INTO "+_stageVars["vot_estudiante_x_planes"]+
					" (VepEstudiante,VepPlan,VepSemestre) VALUES (?,?," + element["semestre"] + ") ";
					var params = [_idEstudiante,resPlan];
					queryInsert = mysql.format(queryInsert, params);
					execQuery(_objConexion, queryInsert, _response, _event, _callbackKill,function(resultSet){
						
					});
				}
			});
		});
	});
	_callbackComplete();
}

// ***************            Consulta log votos si el usuario ya voto:
// ***************       por ultimo dispara ó responde con el listado de Consejos:
function consejosEstudi(_idEstudiante, _objConexion, _response, _stageVars, _event, _objectRequest, _callbackKill, _callbackComplete){
		var queryLogConse = 'SELECT vtc.VcNombre, vtc.VcId, vtc.VcFoto, vtp.VplCodigo, DATE_FORMAT(vtl.VlgFechaVotacion, "%Y-%d-%m %H:%i:%s") as VlgFechaVotacion FROM '+_stageVars["vot_consejo"]+' vtc INNER JOIN '+_stageVars["vot_plan"]+' vtp ON vtc.VcId = vtp.VplConsejo INNER JOIN '+_stageVars["vot_estudiante_x_planes"]+' vtep ON vtp.VplId = vtep.VepPlan INNER JOIN '+_stageVars["vot_estudiantes"]+' vte ON vte.VesId = vtep.VepEstudiante LEFT JOIN '+_stageVars["vot_log_votaciones"]+' vtl ON vte.VesId = vtl.VlgEstudiante AND vtc.VcId = vtl.VlgConsejo where vte.VesId = ?';
		queryLogConse = mysql.format(queryLogConse, _idEstudiante);
		execQuery(_objConexion, queryLogConse, _response, _event, _callbackKill,function(resultSet){
			_callbackComplete(resultSet);
		});
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