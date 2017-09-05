'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _UserDetail = require('./Users/UserDetail');

var _UserDetail2 = _interopRequireDefault(_UserDetail);

var _SearchBar = require('./Trips/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Home = require('./home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _SocialNetworks = require('./about/SocialNetworks');

var _SocialNetworks2 = _interopRequireDefault(_SocialNetworks);

var _TripsPage = require('./Trips/TripsPage');

var _TripsPage2 = _interopRequireDefault(_TripsPage);

var _NewTripPage = require('./Trips/NewTripPage');

var _NewTripPage2 = _interopRequireDefault(_NewTripPage);

var _TripPage = require('./Trips/TripPage');

var _TripPage2 = _interopRequireDefault(_TripPage);

var _Dev = require('./about/Dev');

var _Dev2 = _interopRequireDefault(_Dev);

var _Green = require('./about/Green');

var _Green2 = _interopRequireDefault(_Green);

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
                _react2.default.createElement(_reactRouterDom.Route, { path: '/trips', component: _TripsPage2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/carrent', component: _SocialNetworks2.default }),
                _react2.default.createElement(
                    _reactRouterDom.Route,
                    { path: '/trips', component: _TripsPage2.default },
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/trips/new', component: _NewTripPage2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/trips/:id', component: _TripPage2.default })
                ),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _SocialNetworks2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/green', component: _Green2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dev', component: _Dev2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _SocialNetworks2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _SocialNetworks2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _SocialNetworks2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _SocialNetworks2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/find', component: _SearchBar2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/contact/:id', component: _UserDetail2.default })
            )
        )
    );
};

exports.default = Main;
//# sourceMappingURL=Routes.js.map