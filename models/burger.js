var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
    });
  },
    insert: function (cols, vals, cb) {
        orm.insert("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function (id, cols, cb) {
        condition = "id = " + id
        orm.update("burgers", cols, condition, function(res) {
            cb(res);
    });
};
module.exports = burger;