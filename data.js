var mongoose = require('mongoose'),
 Servise = require("./models/servise");


var data =[
  {
    title : "Blanchiment dentaire",
    image : "https://farm5.staticflickr.com/4045/4697494799_0868251dcd.jpg",
    body : "e Parodonte est l\’ensemble des tissus de soutient de la dent : la gencive, l\’os alvéolaire, le ligament alvéolo-dentaire.  le parodonte peut être atteint par plusieurs affections (gingivite,"
  },
  {
    title : "Parodontologie",
    image : "https://farm2.staticflickr.com/1286/882252550_73c5f708ae.jpg",
    body : "e Parodonte est l’ensemble des tissus de soutient de la dent : la gencive, l’os alvéolaire, le ligament alvéolo-dentaire. le parodonte peut être atteint par plusieurs affections (gingivite, "
  },
  {
    title : "Chirurgie buccale",
    image : "https://farm1.staticflickr.com/51/112382169_70ec612c7f.jpg",
    body : "La chirurgie orale est une spécialité qui regroupe de nombreux domaines d’interventions. dont : • Extractions dentaires simples et complexes (dents de sagesse, canines incluses, enclavées, ectopiques "
  }
];


function dataDB() {
  Servise.remove({}, function (err) {
      if (err) {
          console.log(err);
      } else {
      console.log("Removed all campgrounds");
    }
   data.forEach(function (db) {
   Servise.create(db,function (err,service) {
    if (err) {
      console.log(err);
    }else {
      console.log("Add a new Services");

    }

  });
});
  });
}
module.exports = dataDB;
