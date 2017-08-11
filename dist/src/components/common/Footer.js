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

var _howWorks = require("../../img/icons/material/howWorks.svg");

var _howWorks2 = _interopRequireDefault(_howWorks);

var _share = require("../../img/icons/material/share.svg");

var _share2 = _interopRequireDefault(_share);

var _questionMark = require("../../img/icons/material/question-mark.svg");

var _questionMark2 = _interopRequireDefault(_questionMark);

var _leaf = require("../../img/icons/material/leaf.svg");

var _leaf2 = _interopRequireDefault(_leaf);

var _team = require("../../img/icons/material/team.svg");

var _team2 = _interopRequireDefault(_team);

var _disc = require("../../img/icons/material/disc.svg");

var _disc2 = _interopRequireDefault(_disc);

var _carp_g = require("../../img/logo/carp_g.svg");

var _carp_g2 = _interopRequireDefault(_carp_g);

var _car_g = require("../../img/logo/car_g.svg");

var _car_g2 = _interopRequireDefault(_car_g);

var _park_g = require("../../img/logo/park_g.svg");

var _park_g2 = _interopRequireDefault(_park_g);

var _elec_g = require("../../img/logo/elec_g.svg");

var _elec_g2 = _interopRequireDefault(_elec_g);

var _Copyright = require("./Copyright");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

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
                    {className: "section section-footer"},
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
                                _reactResponsive2.default,
                                {maxDeviceWidth: 700},
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    " Es m\xE1s barato, facil, y r\xE1pido ya que elimina los intermediarios y permite poner en contacto a los particulares. Adem\xE1s permite reducir el tr\xE1fico de veh\xEDculos en las grandes ciudades, ayudando al medio ambiente y reducir as\xED el impacto nocivo en la capa de ozono."
                                )
                            )
                        )
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
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Servicios"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _carp_g2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/trips"},
                                        " Carpooling"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _car_g2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/carrent" },
                                        " Alquiler de Autos"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _park_g2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/parkrent" },
                                        " Alquiler de Cocheras"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _elec_g2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/electric"},
                                        " Autos El\xE9ctricos"
                                    ),
                                    " ",
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        {
                                            bsStyle: "warning"
                                        },
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
                                    _react2.default.createElement("img", {height: 25, src: _howWorks2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/howWorks"},
                                        " \xBFC\xF3mo funciona?"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _questionMark2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/faq"},
                                        " Preguntas frecuentes"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _share2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/collaborative"},
                                        " Econom\xEDa Colaborativa"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _leaf2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/green"},
                                        " Huella ecol\xF3gica"
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
                                    " Autoqe"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _world2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/next"},
                                        " Pr\xF3ximos paises"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _design2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/design"},
                                        " Rinc\xF3n de dise\xF1o"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _code2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/dev"},
                                        " Rinc\xF3n de Desarrollo"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _press2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/press"},
                                        " Rinc\xF3n de Prensa"
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
                                    _react2.default.createElement("img", {height: 25, src: _disc2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/promotion"},
                                        " Promociones"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { height: 25, src: _handShake2.default }),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/work"},
                                        " Trabajos "
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        {
                                            bsStyle: "success"
                                        },
                                        "Contratando!"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _team2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/team"},
                                        " Equipo"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", {height: 25, src: _world2.default}),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        {to: "/contact"},
                                        " Contacto"
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        {className: "social-container"},
                        _react2.default.createElement(
                            "h2",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {to: "https://www.facebook.com/autoqe"},
                                _react2.default.createElement("i", {
                                    className: "fa fa-facebook"
                                })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {to: "https://www.twitter.com/autoqe"},
                                _react2.default.createElement("i", {
                                    className: "fa fa-twitter"
                                })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {to: "https://www.instagram.com/autoqe"},
                                _react2.default.createElement("i", {
                                    className: "fa fa-instagram"
                                })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {to: "www.youtube.com/channel/UC7RUb3Ieez8Pl9uLIhZclyQ"},
                                _react2.default.createElement("i", {
                                    className: "fa fa-youtube"
                                })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {to: "https://www.linkedin.com/groups/autoqe"},
                                _react2.default.createElement("i", {
                                    className: "fa fa-linkedin"
                                })
                            ),
                            " \xA0 \xA0",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {to: "https://google.com/+autoqe"},
                                _react2.default.createElement("i", { className: "fa fa-google-plus" })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
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