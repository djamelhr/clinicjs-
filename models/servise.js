var mongoose = require('mongoose');


var serviseSchema = new mongoose.Schema({
  title : String,
  image : String,
  body  : String
});

module.exports = mongoose.model("Servise", serviseSchema);
