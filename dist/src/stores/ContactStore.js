'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _UserConstants = require('../constants/UserConstants');

var _UserConstants2 = _interopRequireDefault(_UserConstants);

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHANGE_EVENT = 'change';

var _contacts = [];
var _contact = {};

function setContacts(contacts) {
  _contacts = contacts;
}

function setContact(contact) {
  _contact = contact;
}

var ContactStoreClass = function (_EventEmitter) {
  _inherits(ContactStoreClass, _EventEmitter);

  function ContactStoreClass() {
    _classCallCheck(this, ContactStoreClass);

    return _possibleConstructorReturn(this, (ContactStoreClass.__proto__ || Object.getPrototypeOf(ContactStoreClass)).apply(this, arguments));
  }

  _createClass(ContactStoreClass, [{
    key: 'emitChange',
    value: function emitChange() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }, {
    key: 'getContacts',
    value: function getContacts() {
      return _contacts;
    }
  }, {
    key: 'getContact',
    value: function getContact() {
      return _contact;
    }
  }]);

  return ContactStoreClass;
}(_events.EventEmitter);

var ContactStore = new ContactStoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
ContactStore.dispatchToken = _AppDispatcher2.default.register(function (action) {

  switch (action.actionType) {
    case _UserConstants2.default.RECIEVE_USERS:
      setContacts(action.contacts);
      // We need to call emitChange so the event listener
      // knows that a change has been made
      ContactStore.emitChange();
      break;

    case _UserConstants2.default.RECIEVE_USER:
      setContact(action.contact);
      ContactStore.emitChange();
      break;

    case _UserConstants2.default.RECIEVE_USER_ERROR:
      alert(action.message);
      ContactStore.emitChange();
      break;

    case _UserConstants2.default.RECIEVE_USERS_ERROR:
      alert(action.message);
      ContactStore.emitChange();
      break;

    default:
  }
});

exports.default = ContactStore;
//# sourceMappingURL=ContactStore.js.map