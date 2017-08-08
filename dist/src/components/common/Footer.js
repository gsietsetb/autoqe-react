"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _autoqe_txt_w = require("../../img/logo/autoqe_txt_w.svg");

var _autoqe_txt_w2 = _interopRequireDefault(_autoqe_txt_w);

var _handShake = require("../../img/icons/material/hand-shake.svg");

var _handShake2 = _interopRequireDefault(_handShake);

var _design = require("../../img/icons/material/design.svg");

var _design2 = _interopRequireDefault(_design);

var _press = require("../../img/icons/material/press.svg");

var _press2 = _interopRequireDefault(_press);

var _world = require("../../img/icons/material/world.svg");

var _world2 = _interopRequireDefault(_world);

var _code = require("../../img/icons/material/code.svg");

var _code2 = _interopRequireDefault(_code);

var _Copyright = require("./Copyright");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                { className: "footer", id: "footer" },
                _react2.default.createElement(
                    "section",
                    { className: "section contactBanner" },
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 4, md: 3 },
                            " ",
                            _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: _autoqe_txt_w2.default })
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 8, md: 9 },
                            _react2.default.createElement(
                                "h4",
                                null,
                                " Sobre nosotros"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Autoqe es una soluci\xF3n de transporte dentro de la econom\xEDa colaborativa. Te permite compartir trayectos, alquilar autos y cocheras entre particulares a tu alrededor. "
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                " Es m\xE1s barato, facil, y r\xE1pido ya que elimina los intermediarios y permite poner en contacto a los particulares. Adem\xE1s permite reducir el tr\xE1fico de veh\xEDculos en las grandes ciudades, ayudando al medio ambiente y reducir as\xED el impacto nocivo en la capa de ozono."
                            )
                        ),
                        '\n',
                        '\n',
                        '\n',
                        '\n'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                " ",
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Servicios"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carpooling" },
                                        "Carpooling"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carrent" },
                                        "Alquiler de Autos"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/parkrent" },
                                        "Alquiler de Cocheras"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/elec" },
                                        "Autos El\xE9ctricos"
                                    ),
                                    " ",
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        { bsStyle: "success" },
                                        "Pr\xF3x."
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Aprend\xE9 mas"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carpooling" },
                                        "\xBFC\xF3mo funciona?"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carpooling" },
                                        "Econom\xEDa Colaborativa"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carrent" },
                                        "Huella ecol\xF3gica"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/parkrent" },
                                        "Alquiler Sostenible"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Contacto"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carpooling" },
                                        "Preguntas frecuentes"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carrent" },
                                        "Promociones"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/parkrent" },
                                        "Equipo"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/elec" },
                                        "Contacto"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                " ",
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    " Autoqe"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { height: 25, src: _world2.default }),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carpooling" },
                                        " Pr\xF3ximos paises"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { height: 25, src: _handShake2.default }),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carpooling" },
                                        " Trabaja con nosotros "
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        { bsStyle: "success" },
                                        "Hiring"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { height: 25, src: _design2.default }),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carrent" },
                                        " Rinc\xF3n de dise\xF1o"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { height: 25, src: _code2.default }),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carrent" },
                                        " Rinc\xF3n de Desarrollo"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { height: 25, src: _press2.default }),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carrent" },
                                        " Rinc\xF3n de Prensa"
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        { className: "social-container social-btns" },
                        _react2.default.createElement(
                            "h2",
                            { className: "social-btns" },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "https://www.youtube.com/rawshorts" },
                                _react2.default.createElement("i", { className: "fa fa-youtube" })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "https://www.twitter.com/rawshorts" },
                                _react2.default.createElement("i", { className: "fa fa-twitter" })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "https://www.facebook.com/rawshorts" },
                                _react2.default.createElement("i", { className: "fa fa-facebook" })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "https://www.linkedin.com/groups/Explainer-Videos-2803489" },
                                _react2.default.createElement("i", { className: "fa fa-linkedin" })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "https://google.com/+rawshorts" },
                                _react2.default.createElement("i", { className: "fa fa-google-plus" })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        "s",
                        _react2.default.createElement(_Copyright2.default, null)
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=Footer.js.map