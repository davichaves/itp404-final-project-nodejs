var xkcd = require('xkcd');

module.exports = {
  getCurrent: function() {
    return new Promise(function(resolve, reject) {
      xkcd(function (data) {
        resolve(data);
        done();
      });
    });
  },
  getById: function(postId) {
    return new Promise(function(resolve, reject) {
      xkcd(postId, function (data) {
        resolve(data);
        done();
      });
    });
  }
};
