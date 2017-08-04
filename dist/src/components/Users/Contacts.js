'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _ContactActions = require('../../actions/ContactActions');

var _ContactActions2 = _interopRequireDefault(_ContactActions);

var _ContactStore = require('../../stores/ContactStore');

var _ContactStore2 = _interopRequireDefault(_ContactStore);

var _ContactListItem = require('./ContactListItem');

var _ContactListItem2 = _interopRequireDefault(_ContactListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Link } from 'react-router';


// We'll use this function to get a contact
// list item for each of the Users in our list
function getContactListItem(contact) {
  return _react2.default.createElement(_ContactListItem2.default, {
    key: contact.id,
    contact: contact
  });
}

var ContactsComponent = function (_Component) {
  _inherits(ContactsComponent, _Component);

  function ContactsComponent() {
    _classCallCheck(this, ContactsComponent);

    // For our initial state, we just want
    // an empty array of Users
    var _this = _possibleConstructorReturn(this, (ContactsComponent.__proto__ || Object.getPrototypeOf(ContactsComponent)).call(this));

    _this.state = {
      contacts: []
      // We need to bind this to onChange so we can have
      // the proper this reference inside the method
    };_this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(ContactsComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _ContactStore2.default.addChangeListener(this.onChange);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _ContactActions2.default.recieveContacts();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _ContactStore2.default.removeChangeListener(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.setState({
        contacts: _ContactStore2.default.getContacts()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var contactListItems = void 0;
      if (this.state.contacts) {
        // Map over the Users and get an element for each of them
        contactListItems = this.state.contacts.map(function (contact) {
          return getContactListItem(contact);
        });
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.ListGroup,
          null,
          contactListItems
        )
      );
    }
  }]);

  return ContactsComponent;
}(_react.Component);

exports.default = ContactsComponent;
//# sourceMappingURL=Users.js.map