"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _reactRotatingText = require("react-rotating-text");

var _reactRotatingText2 = _interopRequireDefault(_reactRotatingText);

var _AuthActions = require("../../actions/AuthActions");

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _AuthStore = require("../../stores/AuthStore");

var _AuthStore2 = _interopRequireDefault(_AuthStore);

var _autoqe_side = require("../../img/logo/autoqe_side.svg");

var _autoqe_side2 = _interopRequireDefault(_autoqe_side);

var _carp_g = require("../../img/logo/carp_g.svg");

var _carp_g2 = _interopRequireDefault(_carp_g);

var _car_g = require("../../img/logo/car_g.svg");

var _car_g2 = _interopRequireDefault(_car_g);

var _park_g = require("../../img/logo/park_g.svg");

var _park_g2 = _interopRequireDefault(_park_g);

var _elec_g = require("../../img/logo/elec_g.svg");

var _elec_g2 = _interopRequireDefault(_elec_g);

var _argentina = require("../../img/icons/flag/061-argentina.svg");

var _argentina2 = _interopRequireDefault(_argentina);

var _spain = require("../../img/icons/flag/012-spain.svg");

var _spain2 = _interopRequireDefault(_spain);

var _chile = require("../../img/icons/flag/051-chile.svg");

var _chile2 = _interopRequireDefault(_chile);

var _unitedStates = require("../../img/icons/flag/002-united-states.svg");

var _unitedStates2 = _interopRequireDefault(_unitedStates);

var _bolivia = require("../../img/icons/flag/bolivia.svg");

var _bolivia2 = _interopRequireDefault(_bolivia);

var _brazil = require("../../img/icons/flag/brazil.svg");

var _brazil2 = _interopRequireDefault(_brazil);

var _location = require("../../img/icons/material/location.svg");

var _location2 = _interopRequireDefault(_location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    flagDropdown: {
        backgroundImage: 'url(' + _argentina2.default + ')',
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: -5
    },
    displayInline: {
        display: 'inline'
    },
    icon: {
        height: 24
    },
    navStyle: {
        background: 'white',
        margin: 0
    }
};

var NavbarComponent = function (_Component) {
    _inherits(NavbarComponent, _Component);

    function NavbarComponent(props) {
        _classCallCheck(this, NavbarComponent);

        //Auth side
        var _this = _possibleConstructorReturn(this, (NavbarComponent.__proto__ || Object.getPrototypeOf(NavbarComponent)).call(this, props));

        _this.state = {
            authenticated: _AuthStore2.default.isAuthenticated()
        };
        _this.login = _this.login.bind(_this);
        _this.logout = _this.logout.bind(_this);

        //Toggle side
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            isOpen: false
        };
        return _this;
    }

    _createClass(NavbarComponent, [{
        key: "login",
        value: function login() {
            var _this2 = this;

            // We can call the show method from Auth0Lock,
            // which is passed down as a prop, to allow
            // the user to log in
            this.props.lock.show(function (err, profile, token) {
                if (err) {
                    alert(err);
                    return;
                }
                // If login is successful, we want to dispatch
                // the logUserIn action so we can have the profile
                // and token set in local storage
                _AuthActions2.default.logUserIn(profile, token);
                // We also want to set the authentication state
                // for the component to true
                _this2.setState({ authenticated: true });
            });
        }
    }, {
        key: "logout",
        value: function logout() {
            _AuthActions2.default.logUserOut();
            this.setState({ authenticated: false });
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _reactBootstrap.Navbar,
                    { collapseOnSelect: true, fixedTop: true, fluid: true, style: styles.navStyle },
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Header,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Navbar.Brand,
                            { pullLeft: true },
                            _react2.default.createElement("img", { href: "#", style: { padding: '0 2vw 0 10px', height: 70 }, src: _autoqe_side2.default,
                                className: "App-logo", alt: "autoqe" })
                        ),
                        _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Collapse,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Nav,
                            { style: { marginTop: 8 }, pullRight: true },
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { eventKey: 1, href: "/Home", title: "Inicio" },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "home" }),
                                "\xA0 Inicio"
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavDropdown,
                                { eventKey: 2, title: _react2.default.createElement(
                                        "span",
                                        null,
                                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "plus-sign" }),
                                        "\xA0 Publicar"
                                    ) },
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 2.1 },
                                    _react2.default.createElement("img", { style: styles.icon, src: _carp_g2.default, className: "App-logo", alt: "logo" }),
                                    "\xA0 Trayecto"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 2.2 },
                                    _react2.default.createElement("img", { style: styles.icon, src: _car_g2.default, className: "App-logo", alt: "logo" }),
                                    "\xA0 Auto"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 2.3 },
                                    _react2.default.createElement("img", { style: styles.icon, src: _park_g2.default, className: "App-logo", alt: "logo" }),
                                    "\xA0 Cochera"
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavDropdown,
                                { eventKey: 3, title: _react2.default.createElement(
                                        "span",
                                        null,
                                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                        "\xA0 Buscar"
                                    ) },
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 3.1 },
                                    _react2.default.createElement("img", { style: styles.icon, src: _carp_g2.default, className: "", alt: "logo" }),
                                    "\xA0 Trayecto"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 3.2 },
                                    _react2.default.createElement("img", { style: styles.icon, src: _car_g2.default, className: "App-logo", alt: "logo" }),
                                    "\xA0 Auto"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 3.3 },
                                    _react2.default.createElement("img", { style: styles.icon, src: _park_g2.default, className: "App-logo", alt: "logo" }),
                                    "\xA0 Cochera"
                                ),
                                _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 3.4 },
                                    _react2.default.createElement("img", { style: styles.icon, src: _elec_g2.default, className: "App-logo", alt: "logo" }),
                                    "\xA0 Auto El\xE9ctrico"
                                )
                            ),
                            _react2.default.createElement(
                                _reactResponsive2.default,
                                { query: "(min-width: 1218px)" },
                                _react2.default.createElement(
                                    _reactBootstrap.NavItem,
                                    { eventKey: 4, href: "#", style: { marginTop: -8, marginBottom: -9 } },
                                    _react2.default.createElement(
                                        _reactBootstrap.FormGroup,
                                        null,
                                        _react2.default.createElement(
                                            _reactBootstrap.InputGroup,
                                            { className: "inputForm" },
                                            _react2.default.createElement(
                                                _reactBootstrap.InputGroup.Addon,
                                                { className: "inputForm" },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search", style: { float: 'left' } }),
                                                " \xA0",
                                                _react2.default.createElement(_reactRotatingText2.default, {
                                                    items: ['Trayecto', 'Auto', 'Cochera'] })
                                            ),
                                            _react2.default.createElement(_reactBootstrap.FormControl, { className: "inputForm", type: "text", placeholder: "Mar del Plata" }),
                                            _react2.default.createElement(
                                                _reactBootstrap.InputGroup.Addon,
                                                null,
                                                _react2.default.createElement("img", { src: _location2.default, height: 20 })
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.DropdownButton,
                                    { style: styles.flagDropdown, bsStyle: 'info', title: '' },
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "1", active: true },
                                        _react2.default.createElement("img", { src: _argentina2.default, height: 24 }),
                                        "\xA0  Argentina"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "2" },
                                        _react2.default.createElement("img", { src: _spain2.default, height: 24 }),
                                        "\xA0  Espa\xF1a"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "3" },
                                        _react2.default.createElement("img", { src: _brazil2.default, height: 24 }),
                                        "\xA0  Brasil"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "4" },
                                        _react2.default.createElement("img", { src: _chile2.default, height: 24 }),
                                        "\xA0  Chile"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "5" },
                                        _react2.default.createElement("img", { src: _bolivia2.default, height: 24 }),
                                        "\xA0  Bolivia"
                                    ),
                                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "6" },
                                        _react2.default.createElement("img", { src: _unitedStates2.default, height: 24 }),
                                        "\xA0  English"
                                    )
                                )
                            ),
                            !this.state.authenticated ? _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { onClick: this.login, eventKey: 5, href: "#" },
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: 'custom', type: "submit" },
                                    "LogIn"
                                )
                            ) : _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { onClick: this.logout, eventKey: 5, href: "#" },
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: 'danger', type: "submit" },
                                    "LogOut"
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { eventKey: 6, href: "#", style: { marginTop: 6 } },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "envelope" }),
                                " \xA0 Contacto"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavbarComponent;
}(_react.Component);

exports.default = NavbarComponent;
//# sourceMappingURL=Header.js.map