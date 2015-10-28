var Query = require('../query');
var request = require('superagent');
var responseHandler = require('../helpers/superagent-handle-response');
var sendQuery = require('./sendQuery');

module.exports = function(path, params, callback){
  var url = this.client.url(path) + '/' + params.query_name + '/' + result;
  var _this = this;

  request
    .get(url)
    .set('Content-Type', 'application/json')
    .set('Authorization', this.client.masterKey())
    .timeout(this.timeout())
    .send(params || {})
    .end(handleSavedQueryResponse);

  function handleSavedQueryResponse(err, res) {
    if (res.body.message) {
      responseHandler(err, res, callback);
    }
    else {
      responseHandler(err, res.result, callback);
    }
    callback = null;
  }

  return;
}
