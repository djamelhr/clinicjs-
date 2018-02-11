var express = require("express"),
    app     = express(),
    mongoose = require("mongoose"),
    Servise = require("./models/servise"),
    Contact = require("./models/contact"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require('method-override'),
    dataDB         = require("./data");

mongoose.connect("mongodb://localhost:27017/djo_app");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));



// Servise.create({
//   title : "dhersa",
//   image : "https://farm6.staticflickr.com/5140/5454249267_5044b3c814.jpg",
//   body : "hello this is"
// });
//
// Servise.remove({}, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log("Removed all campgrounds");
//   }
// });
dataDB();
app.get("/",function (req,res) {
  Servise.find({},function (err,servises) {
    if (err) {
      console.log(err);
    }else {
      res.render("index" , {servises : servises});
    }
  });

});
app.get("/servises",function (req,res) {
  Servise.find({},function (err,servises) {
    if (err) {
      console.log(err);
    }else {
      res.render("servises" , {servises : servises});
    }
  });
});

app.get("/servises/:id",function (req,res) {
  Servise.findById( req.params.id , function(err, foundServise) {
   if(err){
     res.redirect("/servises");
   } else {
     res.render("show", {servise : foundServise}) ;
   }
 });
});

app.get("/contact",function (req,res) {
  res.render("contact");
});

app.get("/contacts",function (req,res) {
  res.render("contacts");
});

app.post("/contacts",function (req,res) {
  req.body.contact.text = req.sanitize(req.body.contact.text);
  
  Contact.create(req.body.contact, function (err,newContact) {
    if (err) {
      res.render("contact");

    }else {
      console.log(req.body.contact);
      res.redirect("/contacts");
    }

  });
});


app.listen(3000,process.env.IP,function (){
  console.log("mechat")
});
