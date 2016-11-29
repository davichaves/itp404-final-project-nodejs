var express = require('express');
var xkcd = require('xkcd');
var xkcdmod = require('./api/xkcdmod');
var app = express();

app.get('/', function (request, response) {
  xkcdmod.getCurrent().then(function(data) {
    response.json(data);
  });
})

app.get('/:postId', function (request, response) {
  xkcdmod.getById(request.params.postId).then(function(data) {
    response.json(data);
  });
})

app.listen(3000)
