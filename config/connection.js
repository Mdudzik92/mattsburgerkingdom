var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.Jaws_DB)
} else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'burgers_db'
  });
}
 
connection.connect();

module.exports = connection