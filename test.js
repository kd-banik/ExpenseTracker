/**
 * This code is supposed to create a connection session and show error when connection is disrupted
 * and relay the connection module automatically to reconnect.
 */

//import mysql module
let dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sampleDatabase',
    port: 3306
};

let connection;

function handleDisconnect() {
    connection = mysql.createConnection(dbConfig);  //recreate connection since old connection is not reusable
    connection.connect(function onConnect(err) {    //the server is either down or restarting takes a while
        if (err) {
            console.log('Error when connecting to database', err);
            setTimeout(handleDisconnect, 10000);    //this delay is introduced before attempting to reconnect
        }                                           //to avoid a hot loop and to allow our node script to process
        console.log('Connected to MySQL database'); //asynchronous requests in the meantime. 
    });                                            //if also serving http, display a 503 error (optional)
    
    connection.on('error', function  onError(err) {
        console.log('db error',err);
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {   //connection is usually lost due to either server restart or
            handleDisconnect();                         //a connection idle timeout (the 'wait_timeout' variable configures this)
        }else{
            throw err;
        }
        console.log('Connection to MySQL interrupted');
    });
}   //handleDisconnect() ends here
handleDisconnect();