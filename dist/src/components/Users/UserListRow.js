'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserListRow = function UserListRow(_ref) {
    var user = _ref.user;

    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            user.name
        )
    );
};

UserListRow.propTypes = {
    user: _react.PropTypes.object.isRequired
};

exports.default = UserListRow;
//# sourceMappingURL=UserListRow.js.map