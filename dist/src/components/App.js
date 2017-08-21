'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('bootstrap/dist/css/bootstrap.min.css');

require('../styles/App.css');

var _auth0Lock = require('auth0-lock');

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

var _Header = require('./common/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Routes = require('./Routes');

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var optionsAuth0 = {
    language: 'es',
    theme: {
        logo: 'https://www.autoqe.com/autoqe_s.png',
        primaryColor: '#122b40'
    }
};

var AppComponent = function (_Component) {
    _inherits(AppComponent, _Component);

    function AppComponent() {
        _classCallCheck(this, AppComponent);

        return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.lock = new _auth0Lock2.default('06DohMivFjjWe43rAOM0Pi1sdr62TAs9', 'autoqe.auth0.com', optionsAuth0);
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
                _react2.default.createElement(_Header2.default, { lock: this.lock }),
                _react2.default.createElement(_Routes2.default, { history: this.props.history }),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return AppComponent;
}(_react.Component);

AppComponent.propTypes = {
    // children: PropTypes.object.isRequired
};

exports.default = AppComponent;
//# sourceMappingURL=App.js.map