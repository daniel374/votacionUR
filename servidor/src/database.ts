//import mysql from 'promise-mysql';
import keys from './keys';
import mysql from 'mysql';


const pool = mysql.createPool(keys.database);

pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query( 'SELECT * FROM vot_consejo', function(err, rows) {
    // And done with the connection.
    //connection.release();
    pool.releaseConnection(connection);
    console.log('DB is connectec');  
    // validaciones
    });
    
});


export default pool;