'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _tripReducer = require('./tripReducer');

var _tripReducer2 = _interopRequireDefault(_tripReducer);

var _userReducer = require('./userReducer');

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    // short hand property names
    trips: _tripReducer2.default,
    users: _userReducer2.default
});

exports.default = rootReducer;
//# sourceMappingURL=index.js.map