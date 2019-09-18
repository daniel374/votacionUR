"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import mysql from 'promise-mysql';
const keys_1 = __importDefault(require("./keys"));
const mysql_1 = __importDefault(require("mysql"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT * FROM vot_consejo', function (err, rows) {
        // And done with the connection.
        //connection.release();
        pool.releaseConnection(connection);
        console.log('DB is connectec');
        // validaciones
    });
});
exports.default = pool;
