const { query } = require("express");
var connection = require("./connection")
var orm = {
    selectAll: function(tablename, cb){
        connection.query('select * from ' + tablename, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            cb(results)
          });
    },
    insertOne: function(tablename, cols, vals, cb){
        connection.query(
            'insert into ' + tablename + "(" + cols.join(",") + ") values (" + vals.burger_name + "," + vals.devoured + ")", function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            cb(results)
          });
    },
    updateOne: function(tablename, cols, condition, cb){
        var queryString = "update " + tablename
        queryString += " set "
        queryString += objectToSequel(cols)
        queryString += " where " 
        queryString += condition
        console.log(queryString)
        connection.query(queryString, function(error, results){
            if (error) throw error;
            cb(results)
        })
    }
}
function objectToSequel(cols){
    var array = [];
    for (var key in cols){
        array.push(key + "=" + cols[key])
    }
    return array.toString()
}
module.exports = orm
