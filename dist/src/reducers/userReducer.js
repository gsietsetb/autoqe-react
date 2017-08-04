'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = courseReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function courseReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.users;
    var action = arguments[1];

    // state variable here reps just an array of courses
    switch (action.type) {
        case types.LOAD_USERS_SUCCESS:
            return Object.assign([], state, action.users);
        default:
            return state;
    }
}
//# sourceMappingURL=userReducer.js.map