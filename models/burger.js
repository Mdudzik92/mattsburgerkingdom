var orm = require("./orm")

var burger = {
all: function(cb){
    orm.all("burgers", cb)
}
}
module.exports = burger