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

var _reactRouterDom = require('react-router-dom');

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
            trip: { name: '', breed: '', weight: '', temperament: '', hobby_ids: [] },
            saving: false
        };
        _this.saveTrip = _this.saveTrip.bind(_this);
        _this.updateTripHobbies = _this.updateTripHobbies.bind(_this);
        _this.updateTripState = _this.updateTripState.bind(_this);
        return _this;
    }

    _createClass(NewTripPage, [{
        key: 'updateTripHobbies',
        value: function updateTripHobbies(event) {
            var trip = this.state.trip;
            var hobbyId = event.target.value;
            var hobby = this.props.checkBoxHobbies.filter(function (hobby) {
                return hobby.id === hobbyId;
            })[0];
            var checked = !hobby.checked;
            hobby['checked'] = !hobby.checked;
            if (checked) {
                trip.hobby_ids.push(hobby.id);
            } else {
                trip.hobby_ids.splice(trip.hobby_ids.indexOf(hobby.id));
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
                    'new trip'
                ),
                _react2.default.createElement(_TripForm2.default, {
                    trip: this.state.trip,
                    hobbies: this.props.checkBoxHobbies,
                    onSave: this.saveTrip,
                    onChange: this.updateTripState,
                    onHobbyChange: this.updateTripHobbies })
            );
        }
    }]);

    return NewTripPage;
}(_react2.default.Component);

function hobbiesForCheckBoxes(hobbies) {
    return hobbies.map(function (hobby) {
        hobby['checked'] = false;
        return hobby;
    });
}

NewTripPage.propTypes = {
    checkBoxHobbies: _propTypes2.default.array.isRequired,
    actions: _propTypes2.default.object.isRequired
};

function mapStateToProps(state, ownProps) {
    var checkBoxHobbies = [];
    if (state.hobbies.length > 0) {
        checkBoxHobbies = hobbiesForCheckBoxes(Object.assign([], state.hobbies));
    }

    return {
        checkBoxHobbies: checkBoxHobbies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(courseActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewTripPage);
//# sourceMappingURL=NewTripPage.js.map