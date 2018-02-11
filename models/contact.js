var mongoose = require('mongoose');


var contactSchema = new mongoose.Schema({
  email : String,
  sujet : String,
  text  : String
});

module.exports = mongoose.model("Contact", contactSchema);
