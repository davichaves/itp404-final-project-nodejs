var express = require('express');
var router = express.Router();
var xkcdmod = require('../api/xkcdmod');

/* GET comics listing. */
router.get('/:postId', function(req, res, next) {
  xkcdmod.getById(req.params.postId).then(function(data) {
    res.json(data);
  });
});

module.exports = router;
