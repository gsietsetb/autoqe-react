'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
    )
    // </table>
    ;
};

TripList.propTypes = {
    trips: _react.PropTypes.array.isRequired
};

exports.default = TripList;
//# sourceMappingURL=TripList.js.map