var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mean-lab");

var Kitty = require('./kitty')

module.exports.Kitty = Kitty;
