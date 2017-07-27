'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('bootstrap/dist/css/bootstrap.min.css');

require('../src/styles/App.css');

var _auth0Lock = require('auth0-lock');

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

var _Navbar = require('./views/common/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SearchBar = require('./components/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Carousel = require('./components/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Services = require('./components/Services');

var _Services2 = _interopRequireDefault(_Services);

var _Footer = require('./views/common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _SocialNetworks = require('./components/SocialNetworks');

var _SocialNetworks2 = _interopRequireDefault(_SocialNetworks);

var _Map = require('./maps/Map');

var _Map2 = _interopRequireDefault(_Map);

var _TripGrid = require('./components/grids/TripGrid');

var _TripGrid2 = _interopRequireDefault(_TripGrid);

var _TalkAbout = require('./components/TalkAbout');

var _TalkAbout2 = _interopRequireDefault(_TalkAbout);

var _HowWorks = require('./components/HowWorks');

var _HowWorks2 = _interopRequireDefault(_HowWorks);

var _main_map_layout = require('./maps/main_map_layout');

var _main_map_layout2 = _interopRequireDefault(_main_map_layout);

var _SecurePayment = require('./components/SecurePayment');

var _SecurePayment2 = _interopRequireDefault(_SecurePayment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppComponent = function (_Component) {
    _inherits(AppComponent, _Component);

    function AppComponent() {
        _classCallCheck(this, AppComponent);

        return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.lock = new _auth0Lock2.default('06DohMivFjjWe43rAOM0Pi1sdr62TAs9', 'autoqe.auth0.com');
            // this.lock = new Auth0Lock(process.env.AUTH0_ID, process.env.DOMAIN);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // document.addEventListener('fb_init', e => FB.XFBML.parse());
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Navbar2.default, { lock: this.lock }),
                _react2.default.createElement(_Carousel2.default, null),
                _react2.default.createElement(_SearchBar2.default, null),
                _react2.default.createElement(_TripGrid2.default, null),
                _react2.default.createElement(_Map2.default, null),
                _react2.default.createElement(_Services2.default, null),
                _react2.default.createElement(_HowWorks2.default, null),
                _react2.default.createElement(_SecurePayment2.default, null),
                _react2.default.createElement(_TalkAbout2.default, null),
                _react2.default.createElement(_SocialNetworks2.default, null),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return AppComponent;
}(_react.Component);

exports.default = AppComponent;
;
//# sourceMappingURL=App.js.map