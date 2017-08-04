'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _UserDetail = require('./Users/UserDetail');

var _UserDetail2 = _interopRequireDefault(_UserDetail);

var _SearchBar = require('./home/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _LastTrips = require('./Trips/oldTrip/LastTrips');

var _LastTrips2 = _interopRequireDefault(_LastTrips);

var _TripDetail = require('./Trips/oldTrip/TripDetail');

var _TripDetail2 = _interopRequireDefault(_TripDetail);

var _Home = require('./home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _SocialNetworks = require('./common/SocialNetworks');

var _SocialNetworks2 = _interopRequireDefault(_SocialNetworks);

var _TripsPage = require('./Trips/TripsPage');

var _TripsPage2 = _interopRequireDefault(_TripsPage);

var _NewTripPage = require('./Trips/NewTripPage');

var _NewTripPage2 = _interopRequireDefault(_NewTripPage);

var _TripPage = require('./Trips/TripPage');

var _TripPage2 = _interopRequireDefault(_TripPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
    return _react2.default.createElement(
        'main',
        null,
        _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            null,
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _SocialNetworks2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/find', component: _SearchBar2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact/:id', component: _UserDetail2.default }),
                _react2.default.createElement(
                    _reactRouterDom.Route,
                    { path: '/trips', component: _TripsPage2.default },
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/trips/new', component: _NewTripPage2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/trips/:id', component: _TripPage2.default })
                ),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/trips/:id', component: _TripDetail2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/trips', component: _LastTrips2.default })
            )
        )
    );
};
// import Index from './components/Index';
exports.default = Main;
//# sourceMappingURL=Routes.js.map