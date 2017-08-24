'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TripListRow = require('./TripListRow');

var _TripListRow2 = _interopRequireDefault(_TripListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TripList = function TripList(_ref) {
    var trips = _ref.trips;

    return _react2.default.createElement(
        'div',
        null,
        trips.map(function (trip) {
            return _react2.default.createElement(_TripListRow2.default, { key: trip.id, trip: trip });
        })
    );
};

TripList.propTypes = {
    trips: _propTypes2.default.array.isRequired
};

exports.default = TripList;
//# sourceMappingURL=TripList.js.map