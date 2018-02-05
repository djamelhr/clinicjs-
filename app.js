var express = require("express"),
    app     = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require('method-override');

mongoose.connect("mongodb://localhost:27017/djo_app");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

var serviseSchema = new mongoose.Schema({
  title : String,
  image : String,
  body  : String
});
var Servise = mongoose.model("Servise", serviseSchema);

Servise.create({
  title : "dhersa",
  image : "https://farm6.staticflickr.com/5140/5454249267_5044b3c814.jpg",
  body : "hello this is"
});


app.get("/",function (req,res) {
  res.render("index");
});
app.get("/servises",function (req,res) {
res.render("servises");
})

app.get("/servises/:id",function (req,res) {
  Servise.findById( req.params.id , function(err, foundServise) {
   if(err){
     res.redirect("/servises");
   } else {
     res.render("show", {servise : foundServise}) ;
   }
 });
});

app.listen(3000,process.env.IP,function (){
  console.log("mechat")
});
