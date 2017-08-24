'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UserListRow = require('./UserListRow');

var _UserListRow2 = _interopRequireDefault(_UserListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function UserList(_ref) {
    var hobbies = _ref.hobbies;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Hobbies'
        ),
        _react2.default.createElement(
            'table',
            { className: 'table' },
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement('th', null)
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                hobbies.map(function (user) {
                    return _react2.default.createElement(_UserListRow2.default, { key: user.id, user: user });
                })
            )
        )
    );
};

UserList.propTypes = {
    hobbies: _propTypes2.default.array.isRequired
};

exports.default = UserList;
//# sourceMappingURL=UserList.js.map