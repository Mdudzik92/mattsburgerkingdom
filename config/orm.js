var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

function objectToSequel(cols) {
    var array = [];
    for (var key in cols) {
        var value = cols[key];

        if (Object.hasOwnProperty.call(cols, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }

        array.push(key + "=" + value);
    }

return array.toString();
};

var orm = {
    select: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";"; 
        connection.query(queryString, function (error, results) {
            if (error) {
                throw error;
            }
            cb(results);
        });
    },
    insert: function (tableName, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableName;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(error, result) {
            if (error) {
                throw error;
            }

            cb(result);
        },
            'insert into ' + tableName + "(" + cols.join(",") + ") values (" + vals.burger_name + "," + vals.devoured + ")", function (error, results) {
                if (error) throw error;
                console.log(results);
                cb(results)
            });
    },
    update: function (tableName, cols, condition, cb) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objectToSequel(cols);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function (error, result) {
            if (error) {
              throw error;
            }

            cb(result);
        });
    }
};

module.exports = orm;