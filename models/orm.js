var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Earthad927!',
  database : 'burgers_db'
});
 
connection.connect();

var orm = {
    all: function(tablename, cb){
        connection.query('select * from ' + tablename, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            cb(results)
          });
    }
}
module.exports = orm
