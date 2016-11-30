var express = require('express');
var router = express.Router();
var xkcdmod = require('../api/xkcdmod');

/* GET home page. */
router.get('/', function(req, res, next) {
  xkcdmod.getCurrent().then(function(data) {
    res.json(data);
  });
});

module.exports = router;
