var xkcd = require('xkcd');

module.exports = {
  getCurrent: function() {
    return new Promise(function(resolve, reject) {
      xkcd(function (data) {
        resolve(data);
      });
    });
  },
  getById: function(postId) {
    return new Promise(function(resolve, reject) {
      xkcd(postId, function (data) {
        resolve(data);
      });
    });
  }
};
