'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('bootstrap/dist/css/bootstrap.min.css');

require('../src/styles/main.css');

var _auth0Lock = require('auth0-lock');

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

var _Navbar = require('./components/common/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SearchBar = require('./components/Home/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Carousel = require('./components/Home/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Services = require('./components/Home/Services');

var _Services2 = _interopRequireDefault(_Services);

var _Footer = require('./components/common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _SocialNetworks = require('./components/common/SocialNetworks');

var _SocialNetworks2 = _interopRequireDefault(_SocialNetworks);

var _Map = require('./components/maps/Map');

var _Map2 = _interopRequireDefault(_Map);

var _LastTrips = require('./components/Trips/LastTrips');

var _LastTrips2 = _interopRequireDefault(_LastTrips);

var _TalkAboutUs = require('./components/Home/TalkAboutUs');

var _TalkAboutUs2 = _interopRequireDefault(_TalkAboutUs);

var _HowItWorks = require('./components/Home/HowItWorks');

var _HowItWorks2 = _interopRequireDefault(_HowItWorks);

var _SecurePayment = require('./components/Home/SecurePayment');

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