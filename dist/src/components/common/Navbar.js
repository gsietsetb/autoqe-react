"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require("redux");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _reactRotatingText = require("react-rotating-text");

var _reactRotatingText2 = _interopRequireDefault(_reactRotatingText);

var _SessionActions = require("../../actions/SessionActions");

var sessionActions = _interopRequireWildcard(_SessionActions);

var _AuthActions = require("../../actions/AuthActions");

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _AuthStore = require("../../store/AuthStore");

var _AuthStore2 = _interopRequireDefault(_AuthStore);

require("./navbar.css");

var _autoqe_txt = require("../../img/logo/autoqe_txt.svg");

var _autoqe_txt2 = _interopRequireDefault(_autoqe_txt);

var _carp = require("../../img/icons/services/carp.svg");

var _carp2 = _interopRequireDefault(_carp);

var _rent = require("../../img/icons/services/rent.svg");

var _rent2 = _interopRequireDefault(_rent);

var _park = require("../../img/icons/services/park.svg");

var _park2 = _interopRequireDefault(_park);

var _el = require("../../img/icons/services/el.svg");

var _el2 = _interopRequireDefault(_el);

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

var _dest = require("../../img/icons/custom/dest.svg");

var _dest2 = _interopRequireDefault(_dest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Icons


var styles = {
    flagDropdown: {
        backgroundImage: 'url(' + _argentina2.default + ')',
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: -5
    }
};
// Default (desktop, tablet) and mobile setup
var Huge = function Huge(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(_reactResponsive2.default, { minWidth: 1218, children: children });
};
var NotHuge = function NotHuge(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(_reactResponsive2.default, { maxWidth: 1218, children: children });
};
var Tablet = function Tablet(_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(_reactResponsive2.default, { minWidth: 860, children: children });
};
var Default = function Default(_ref4) {
    var children = _ref4.children;
    return _react2.default.createElement(_reactResponsive2.default, { minWidth: 768, children: children });
};
var Mobile = function Mobile(_ref5) {
    var children = _ref5.children;
    return _react2.default.createElement(_reactResponsive2.default, { maxWidth: 768, children: children });
};

var NavbarComp = function (_Component) {
    _inherits(NavbarComp, _Component);

    function NavbarComp(props) {
        _classCallCheck(this, NavbarComp);

        //Auth side
        var _this = _possibleConstructorReturn(this, (NavbarComp.__proto__ || Object.getPrototypeOf(NavbarComp)).call(this, props));

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

    _createClass(NavbarComp, [{
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
                    { collapseOnSelect: true, fixedTop: true, fluid: true },
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Header,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Navbar.Brand,
                            { pullLeft: true, className: "logo brand-text" },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/" },
                                _react2.default.createElement("img", { src: _autoqe_txt2.default, alt: "autoqe" })
                            )
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
                                _reactBootstrap.NavDropdown,
                                { id: "publicar", eventKey: 2, title: _react2.default.createElement(
                                        "span",
                                        null,
                                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "plus-sign", className: "nav-icon" }),
                                        "Publicar"
                                    ) },
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 2.1 },
                                    _react2.default.createElement("img", { src: _carp2.default, className: "nav-icon", alt: "logo" }),
                                    _react2.default.createElement(
                                        "span",
                                        { className: "service-carp" },
                                        "Trayecto "
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 2.2 },
                                    _react2.default.createElement("img", { src: _rent2.default, className: "nav-icon", alt: "logo" }),
                                    _react2.default.createElement(
                                        "span",
                                        { className: "service-rent" },
                                        "Auto"
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.MenuItem,
                                    { eventKey: 2.3 },
                                    _react2.default.createElement("img", { src: _park2.default, className: "nav-icon", alt: "logo" }),
                                    _react2.default.createElement(
                                        "span",
                                        { className: "service-park" },
                                        "Cochera"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                NotHuge,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.NavDropdown,
                                    { id: "buscar", eventKey: 3, title: _react2.default.createElement(
                                            "span",
                                            { className: "service-rent" },
                                            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search", className: "nav-icon" }),
                                            "Buscar"
                                        ) },
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: 3.1 },
                                        _react2.default.createElement("img", { src: _carp2.default, className: "nav-icon", alt: "logo" }),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "service-carp" },
                                            "Trayecto "
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: 3.2 },
                                        _react2.default.createElement("img", { src: _rent2.default, className: "nav-icon", alt: "logo" }),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "service-rent" },
                                            "Auto"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: 3.3 },
                                        _react2.default.createElement("img", { src: _park2.default, className: "nav-icon", alt: "logo" }),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "service-park" },
                                            "Cochera"
                                        )
                                    ),
                                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: 3.4 },
                                        _react2.default.createElement("img", { src: _el2.default, className: "nav-icon", alt: "logo" }),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "service-elec" },
                                            "Auto El\xE9ctrico"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                Huge,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.NavItem,
                                    { eventKey: 4, href: "#", style: { marginTop: -5, marginBottom: -9 } },
                                    _react2.default.createElement(
                                        _reactBootstrap.FormGroup,
                                        null,
                                        _react2.default.createElement(
                                            _reactBootstrap.InputGroup,
                                            { className: "inputForm" },
                                            _react2.default.createElement(
                                                _reactBootstrap.InputGroup.Addon,
                                                { className: "search-icon" },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search", style: { float: 'left', color: '#74acdf' } }),
                                                "\xA0",
                                                _react2.default.createElement(_reactRotatingText2.default, { style: { color: '#74acdf' },
                                                    items: ['Trayecto', 'Auto', 'Cochera'] })
                                            ),
                                            _react2.default.createElement(_reactBootstrap.FormControl, { type: "text", placeholder: "Mar del Plata" }),
                                            _react2.default.createElement(
                                                _reactBootstrap.InputGroup.Addon,
                                                { style: { minWidth: 40 } },
                                                _react2.default.createElement("img", { alt: "destination", src: _dest2.default, height: 20, style: { float: 'right' } })
                                            )
                                        )
                                    )
                                )
                            ),
                            !this.state.authenticated ? _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { onClick: this.login, style: { marginTop: -8 }, eventKey: 5, href: "#" },
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { className: "btn-light_w", type: "submit" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "user", className: "nav-icon" }),
                                    "Registro"
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
                                { eventKey: 6, href: "#", style: { marginTop: 0 } },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "envelope", className: "nav-icon" }),
                                "Contacto"
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.DropdownButton,
                                    { id: "lang", style: styles.flagDropdown, bsStyle: 'info', title: '' },
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "1", active: true },
                                        _react2.default.createElement("img", { alt: "arg", src: _argentina2.default, className: "nav-icon" }),
                                        "Argentina"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "2" },
                                        _react2.default.createElement("img", { alt: "sp", src: _spain2.default, className: "nav-icon" }),
                                        "Espa\xF1a"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "3" },
                                        _react2.default.createElement("img", { alt: "br", src: _brazil2.default, className: "nav-icon" }),
                                        "Brasil"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "4" },
                                        _react2.default.createElement("img", { alt: "Ch", src: _chile2.default, className: "nav-icon" }),
                                        "Chile"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "5" },
                                        _react2.default.createElement("img", { alt: "Bol", src: _bolivia2.default, className: "nav-icon" }),
                                        "Bolivia"
                                    ),
                                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                                    _react2.default.createElement(
                                        _reactBootstrap.MenuItem,
                                        { eventKey: "6" },
                                        _react2.default.createElement("img", { alt: "Eng", src: _unitedStates2.default, className: "nav-icon" }),
                                        "English"
                                    )
                                )
                            ),
                            " "
                        )
                    )
                )
            );
        }
    }]);

    return NavbarComp;
}(_react.Component);

_reactBootstrap.Navbar.propTypes = {
    actions: _propTypes2.default.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return { logged_in: state.session };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(sessionActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavbarComp);
//# sourceMappingURL=Navbar.js.map