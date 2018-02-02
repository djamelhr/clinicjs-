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

app.get("/",function (req,res) {
  res.render("index");
});
app.get("/servise",function (req,res) {
res.render("servise");
})

app.listen(3000,process.env.IP,function (){
  console.log("mechat");
 console.log("doadakok");
});
