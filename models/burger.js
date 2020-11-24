var orm = require("../config/orm")

var burger = {
all: function(cb){
    orm.selectAll("burgers", cb)
},
insert: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, cb)
},
update: function(id, cols, cb){
    condition = "id = " + id
    orm.updateOne("burgers", cols, condition, cb)
}
}
module.exports = burger