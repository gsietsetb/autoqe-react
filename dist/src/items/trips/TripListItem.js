'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRouterDom = require('react-router-dom');

var _reactIntl = require('react-intl');

var _location = require('../../img/icons/material/location2.svg');

var _location2 = _interopRequireDefault(_location);

var _location3 = require('../../img/icons/material/location3.svg');

var _location4 = _interopRequireDefault(_location3);

var _location5 = require('../../img/icons/material/location.svg');

var _location6 = _interopRequireDefault(_location5);

var _girl = require('../../img/icons/material/girl.svg');

var _girl2 = _interopRequireDefault(_girl);

var _highway = require('../../img/icons/material/highway.svg');

var _highway2 = _interopRequireDefault(_highway);

var _highway_n = require('../../img/icons/material/highway_n.svg');

var _highway_n2 = _interopRequireDefault(_highway_n);

var _pet = require('../../img/icons/material/pet.svg');

var _pet2 = _interopRequireDefault(_pet);

var _timeLeft = require('../../img/icons/material/time-left.svg');

var _timeLeft2 = _interopRequireDefault(_timeLeft);

var _fast = require('../../img/icons/material/fast.svg');

var _fast2 = _interopRequireDefault(_fast);

var _smoke = require('../../img/icons/material/smoke.svg');

var _smoke2 = _interopRequireDefault(_smoke);

var _mateInfusion = require('../../img/icons/material/mate-infusion.svg');

var _mateInfusion2 = _interopRequireDefault(_mateInfusion);

var _facebook = require('../../img/icons/material/facebook.svg');

var _facebook2 = _interopRequireDefault(_facebook);

var _twitter = require('../../img/icons/material/twitter.svg');

var _twitter2 = _interopRequireDefault(_twitter);

var _drivingLicense = require('../../img/icons/material/driving-license.svg');

var _drivingLicense2 = _interopRequireDefault(_drivingLicense);

var _autoqe_gray = require('../../img/logo/autoqe_gray.svg');

var _autoqe_gray2 = _interopRequireDefault(_autoqe_gray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TripListItem = function (_Component) {
    _inherits(TripListItem, _Component);

    function TripListItem() {
        _classCallCheck(this, TripListItem);

        return _possibleConstructorReturn(this, (TripListItem.__proto__ || Object.getPrototypeOf(TripListItem)).apply(this, arguments));
    }

    _createClass(TripListItem, [{
        key: 'render',
        value: function render() {
            var trip = this.props.trip;

            function review_stars() {
                var reviews = _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star' }),
                    i = void 0;
                for (i = 1; i <= 5; i++) {
                    reviews += i <= trip.id ? _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star' }) : _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star-empty' });
                }return _react2.default.createElement(
                    'div',
                    null,
                    reviews
                );
            }
            function setSeats() {
                if (trip.seats > 3) return _react2.default.createElement(
                    _reactBootstrap.Label,
                    { bsStyle: 'success' },
                    trip.seats,
                    ' Asientos'
                );else if (trip.seats < 2) return _react2.default.createElement(
                    _reactBootstrap.Label,
                    { bsStyle: 'danger' },
                    trip.seats,
                    ' Asiento!'
                );else return _react2.default.createElement(
                    _reactBootstrap.Label,
                    null,
                    trip.seats,
                    ' Asientos'
                );
            }
            return _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/trips/' + trip.id, style: { color: '#122b40' } },
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 1, s: 1, md: 1 },
                            _react2.default.createElement('img', {src: trip.image, height: 80})
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 2, s: 1, md: 2 },
                            _react2.default.createElement(
                                'h4',
                                null,
                                trip.username
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement('img', {src: _facebook2.default, height: 15}),
                                ' \xA0',
                                _react2.default.createElement('img', {src: _twitter2.default, height: 15}),
                                ' \xA0',
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star' }),
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star' }),
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star' }),
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star' }),
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'star-empty' })
                            ),
                            _react2.default.createElement('img', {src: _drivingLicense2.default, height: 25}),
                            ' \xA0',
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                { bsStyle: 'info' },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok' }),
                                '\xA0Verifcado'
                            ),
                            ' \xA0'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 3, s: 5, md: 5 },
                            _react2.default.createElement(
                                'h4',
                                {style: {display: 'inline'}},
                                _react2.default.createElement('img', { src: _location2.default, height: 30 }),
                                trip.from,
                                ' \u2192',
                                trip.stops && _react2.default.createElement(
                                'div',
                                {style: {display: 'inline'}},
                                _react2.default.createElement('img', {src: _location4.default, height: 30}),
                                trip.stops,
                                '\u2192'
                                ),
                                _react2.default.createElement('img', {src: _location6.default, height: 30}),
                                trip.to,
                                ' \xA0 \xA0'
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    null,
                                    ' ',
                                    _react2.default.createElement('img', {src: _autoqe_gray2.default, height: 20}),
                                    trip.car
                                ),
                                ' \xA0',
                                trip.highway ? _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    {style: {display: 'inline'}},
                                    _react2.default.createElement('img', {
                                        title: 'Por Autopista!',
                                        src: _highway2.default,
                                        height: 20
                                    })
                                ) : _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    {style: {display: 'inline'}},
                                    _react2.default.createElement('img', {
                                        title: 'Sin Autopista o peajes!',
                                        src: _highway_n2.default,
                                        height: 20
                                    })
                                ),
                                trip.pets && _react2.default.createElement(
                                _reactBootstrap.Button,
                                {style: {display: 'inline'}},
                                _react2.default.createElement('img', {
                                    title: 'Pueden subir mascotas!',
                                    src: _pet2.default,
                                    height: 20
                                })
                                ),
                                !trip.smoke && _react2.default.createElement(
                                _reactBootstrap.Button,
                                {style: {display: 'inline'}},
                                _react2.default.createElement('img', {
                                    title: 'Se puede fumar!',
                                    src: _smoke2.default,
                                    height: 20
                                })
                                ),
                                trip.withMate && _react2.default.createElement(
                                _reactBootstrap.Button,
                                {style: {display: 'inline'}},
                                _react2.default.createElement('img', {
                                    title: 'Lleva Mate!',
                                    src: _mateInfusion2.default,
                                    height: 20
                                })
                                ),
                                trip.onlyGirls && _react2.default.createElement(
                                _reactBootstrap.Button,
                                {style: {display: 'inline'}},
                                _react2.default.createElement('img', {
                                    title: 'S\xF3lo mujeres!',
                                    src: _girl2.default,
                                    height: 20
                                })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 3, s: 2, md: 2 },
                            _react2.default.createElement(
                                'h4',
                                null,
                                !trip.hurry ? _react2.default.createElement('img', {
                                    src: _fast2.default,
                                    height: 20
                                }) : _react2.default.createElement('img', {src: _timeLeft2.default, height: 20}),
                                ' \xA0',
                                _react2.default.createElement(_reactIntl.FormattedRelative, { value: trip.date }),
                                ','
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                {style: {padding: ''}},
                                _react2.default.createElement(
                                    'h4',
                                    {style: {margin: '0 0'}},
                                    _react2.default.createElement(_reactIntl.FormattedDate, {value: trip.date}),
                                    '\xA0  \u2192',
                                    _react2.default.createElement(_reactIntl.FormattedTime, {value: trip.date})
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 3, s: 2, md: 2, style: { display: 'flex' } },
                            _react2.default.createElement(
                                'h4',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    trip.price
                                ),
                                ' $ ARS \xA0',
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'piggy-bank' }),
                                ' \xA0',
                                setSeats()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TripListItem;
}(_react.Component);

exports.default = TripListItem;
//# sourceMappingURL=TripListItem.js.map