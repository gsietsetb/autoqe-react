'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _TripActions = require('../../actions/TripActions');

var courseActions = _interopRequireWildcard(_TripActions);

var _TripForm = require('./TripForm');

var _TripForm2 = _interopRequireDefault(_TripForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTripPage = function (_React$Component) {
    _inherits(NewTripPage, _React$Component);

    function NewTripPage(props) {
        _classCallCheck(this, NewTripPage);

        var _this = _possibleConstructorReturn(this, (NewTripPage.__proto__ || Object.getPrototypeOf(NewTripPage)).call(this, props));

        _this.state = {
            trip: { from: '', to: '', price: '', seats: '', passenger_ids: [] },
            saving: false
        };
        // this.redirect = this.redirect.bind(this);
        _this.saveTrip = _this.saveTrip.bind(_this);
        _this.updateTripPassengers = _this.updateTripPassengers.bind(_this);
        _this.updateTripState = _this.updateTripState.bind(_this);
        return _this;
    }

    _createClass(NewTripPage, [{
        key: 'updateTripPassengers',
        value: function updateTripPassengers(event) {
            var trip = this.state.trip;
            var passengerId = event.target.value;
            var passenger = this.props.checkBoxPassengers.filter(function (passenger) {
                return passenger.id === passengerId;
            })[0];
            var checked = !passenger.checked;
            passenger['checked'] = !passenger.checked;
            if (checked) {
                trip.passenger_ids.push(passenger.id);
            } else {
                trip.passenger_ids.splice(trip.passenger_ids.indexOf(passenger.id));
            }

            this.setState({ trip: trip });
        }
    }, {
        key: 'updateTripState',
        value: function updateTripState(event) {
            var field = event.target.name;
            var trip = this.state.trip;
            trip[field] = event.target.value;
            return this.setState({ trip: trip });
        }
    }, {
        key: 'saveTrip',
        value: function saveTrip(event) {
            event.preventDefault();
            this.props.actions.createTrip(this.state.trip);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'A\xF1adir viaje'
                ),
                _react2.default.createElement(_TripForm2.default, {
                    trip: this.state.trip,
                    passengers: this.props.checkBoxPassengers,
                    onSave: this.saveTrip,
                    onChange: this.updateTripState
                    // onPassengerChange={this.updateTripPassengers}
                })
            );
        }
    }]);

    return NewTripPage;
}(_react2.default.Component);

function passengersForCheckBoxes(passengers) {
    return passengers.map(function (passenger) {
        passenger['checked'] = false;
        return passenger;
    });
}

NewTripPage.propTypes = {
    checkBoxPassengers: _propTypes2.default.array.isRequired,
    actions: _propTypes2.default.object.isRequired
};

function mapStateToProps(state, ownProps) {
    // let checkBoxPassengers = [];
    // if (state.user.length > 0) {
    //     checkBoxPassengers = passengersForCheckBoxes(Object.assign([], state.passengers));
    // }
    //
    // return {
    //     checkBoxPassengers: checkBoxPassengers
    // };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(courseActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewTripPage);
// export default connect(mapStateToProps)(NewTripPage);
//# sourceMappingURL=NewTripPage.js.map