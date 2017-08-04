'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _ContactConstants = require('../constants/ContactConstants');

var _ContactConstants2 = _interopRequireDefault(_ContactConstants);

var _ContactsAPI = require('../utils/ContactsAPI');

var _ContactsAPI2 = _interopRequireDefault(_ContactsAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api_url = 'https://api.autoqe.com/';
// const api_url = 'http://localhost:3001/';

exports.default = {

  recieveContacts: function recieveContacts() {
    _ContactsAPI2.default.getContacts(api_url + 'api/Users').then(function (contacts) {
      _AppDispatcher2.default.dispatch({
        actionType: _ContactConstants2.default.RECIEVE_USERS,
        contacts: contacts
      });
    }).catch(function (message) {
      _AppDispatcher2.default.dispatch({
        actionType: _ContactConstants2.default.RECIEVE_USERS_ERROR,
        message: message
      });
    });
  },

  getContact: function getContact(id) {
    _ContactsAPI2.default.getContact(api_url + 'api/Users/' + id).then(function (contact) {
      _AppDispatcher2.default.dispatch({
        actionType: _ContactConstants2.default.RECIEVE_CONTACT,
        contact: contact
      });
    }).catch(function (message) {
      _AppDispatcher2.default.dispatch({
        actionType: _ContactConstants2.default.RECIEVE_CONTACT_ERROR,
        message: message
      });
    });
  }

};
//# sourceMappingURL=UserActions.js.map