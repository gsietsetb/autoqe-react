'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterHashLink = require('react-router-hash-link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TripListItem = function TripListItem(_ref) {
    var trip = _ref.trip;

    return _react2.default.createElement(
        'li',
        { className: 'list-group-item' },
        _react2.default.createElement(
            _reactRouterHashLink.HashLink,
            { to: '/trips/' + trip.id },
            trip.name
        )
    );
};

TripListItem.propTypes = {
    trip: _propTypes2.default.object.isRequired
};

exports.default = TripListItem;
//# sourceMappingURL=TripItem.js.map