'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _TripList = require('./TripList');

var _TripList2 = _interopRequireDefault(_TripList);

var _TripActions = require('../../actions/TripActions');

var actions = _interopRequireWildcard(_TripActions);

var _reactBootstrap = require('react-bootstrap');

var _carp_w_ = require('../../img/logo/carp_w_1.svg');

var _carp_w_2 = _interopRequireDefault(_carp_w_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TripsPage = function (_React$Component) {
    _inherits(TripsPage, _React$Component);

    function TripsPage() {
        _classCallCheck(this, TripsPage);

        return _possibleConstructorReturn(this, (TripsPage.__proto__ || Object.getPrototypeOf(TripsPage)).apply(this, arguments));
    }

    _createClass(TripsPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.trips[0].id === '') {
                this.props.actions.loadTrips();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var trips = this.props.trips;
            console.log('this is here: ' + JSON.stringify(trips));
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    {className: 'section section-regular'},
                    _react2.default.createElement(
                        _reactBootstrap.Panel,
                        {
                            bsStyle: 'primary', collapsible: true, defaultExpanded: true,
                            header: _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement('img', {src: _carp_w_2.default, height: 40}),
                                ' \xA0',
                                _react2.default.createElement(
                                    'h3',
                                    {style: {display: 'inline'}},
                                    ' \xDAltimos viajes publicados: \xA0 \xA0 ',
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, {
                                        glyph: 'triangle-bottom'
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {to: '/trips/new'},
                                    _react2.default.createElement(
                                        _reactBootstrap.Button,
                                        {style: {float: 'right'}, type: 'submit', bsStyle: 'primary'},
                                        _react2.default.createElement(_reactBootstrap.Glyphicon, {glyph: 'plus-sign'}),
                                        ' \xA0 Publicar viaje'
                                    )
                                )
                            )
                        },
                        _react2.default.createElement(
                            _reactBootstrap.ListGroup,
                            {fill: true},
                            _react2.default.createElement(
                                _reactBootstrap.ListGroupItem,
                                null,
                                _react2.default.createElement(_TripList2.default, {trips: trips})
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TripsPage;
}(_react2.default.Component);

TripsPage.propTypes = {
    trips: _react.PropTypes.array.isRequired,
    children: _react.PropTypes.object
};

// function mapStateToProps(state, ownProps) {
//     // let trip = {id: '', from: '', to: '', price: '', username: '', car: []};
//     // const tripId = ownProps.params.id;
//     // if (state.trips.length > 0) {
//     //     trip = Object.assign({}, state.trips.find(trip => trip.id  id)
//     // }
//     return {trip: state.trips};
// }

function mapStateToProps(state, ownProps) {
    if (state.trips.length > 0) {
        return {
            trips: state.trips
        };
    } else {
        return {
            trips: [{ id: '', from: '', to: '', price: '', username: '', car: [] }]
        };
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TripsPage);
//# sourceMappingURL=TripsPage.js.map