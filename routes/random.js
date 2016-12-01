var express = require('express');
var router = express.Router();
var xkcdmod = require('../api/xkcdmod');

/* GET random comic. */
router.get('/', function(req, res, next) {
  var currentComicNumber;
  xkcdmod.getCurrent().then(function(data) {
    currentComicNumber = data.num;
  }).then(function () {
    var randomNumber;
    do { //PREVENTING TO GET COMIC 404 BECAUSE IT DOESNT EXISTS
      randomNumber = Math.floor((Math.random() * currentComicNumber) + 1);
    } while (randomNumber == 404)
    xkcdmod.getById(randomNumber).then(function(data) {
      res.json(data);
    });
  });
});

module.exports = router;
