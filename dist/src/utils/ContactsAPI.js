'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AuthStore = require('../store/AuthStore');

var _AuthStore2 = _interopRequireDefault(_AuthStore);

var _client = require('superagent/lib/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  // We want to get a list of all the Users
  // from the API. This list contains reduced info
  // and will be be used in the sidebar
  getContacts: function getContacts(url) {
    return new Promise(function (resolve, reject) {
      _client2.default.get(url).end(function (err, response) {
        if (err) reject(err);
        resolve(JSON.parse(response.text));
      });
    });
  },

  getContact: function getContact(url) {
    return new Promise(function (resolve, reject) {
      _client2.default.get(url).set('Authorization', 'Bearer ' + _AuthStore2.default.getJwt()).end(function (err, response) {
        if (err) reject(err);
        resolve(JSON.parse(response.text));
      });
    });
  }
};
//# sourceMappingURL=UsersAPI.js.map