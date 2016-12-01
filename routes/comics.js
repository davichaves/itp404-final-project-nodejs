var express = require('express');
var router = express.Router();
var xkcdmod = require('../api/xkcdmod');

/* GET comics listing. */
router.get('/:postId', function(req, res, next) {
  var postId = req.params.postId;
  if (postId != 404) {
    xkcdmod.getById(postId).then(function(data) {
      res.json(data);
    });
  } else {
    res.json({ error: 'This comic does not exist!' });
  }
});

module.exports = router;
