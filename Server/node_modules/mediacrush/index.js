var concat = require('concat-stream');
var hyperquest = require('hyperquest');
var isArray = require('lodash.isarray');
var jsonist = require('jsonist');
var querystring = require('querystring');

var ENDPOINT  = 'https://mediacru.sh/api/';
var HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
  'User-Agent': 'node-mediacrush'
};

function collector(req, callback) {
  req.pipe(concat(function(data) {
    var ret;
    try {
      ret = JSON.parse(data);
    } catch (e) {
      var err = new SyntaxError('JSON parse error: ' + e.message, e);
      err.data = data;
      return callback(err);
    }

    callback(null, ret);
  }));
}

function createAlbum(hashes, callback) {
  var stream = hyperquest.post(ENDPOINT + 'album/create', {headers: HEADERS});
  collector(stream, callback);
  stream.end(querystring.stringify({list: hashes.join(',')}));
}

function getInfo(hash, callback) {
  // A single hash
  if (!isArray(hash)) {
    return jsonist.get(ENDPOINT + hash, callback);
  }

  // Multiple hashes
  jsonist.get(ENDPOINT + 'info?list=' + hash.join(','), callback);
}

function uploadURL(url, callback) {
  var stream = hyperquest.post(ENDPOINT + 'upload/url', {headers: HEADERS});
  collector(stream, callback);
  stream.end(querystring.stringify({url: url}));
}

var mediacrush = {};
mediacrush.createAlbum = createAlbum;
mediacrush.getInfo = getInfo;
mediacrush.uploadURL = uploadURL;

module.exports = mediacrush;