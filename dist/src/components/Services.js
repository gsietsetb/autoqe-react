"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _mockupCarPool = require("./../img/banner/mockup-carPool.png");

var _mockupCarPool2 = _interopRequireDefault(_mockupCarPool);

var _mockupCarShare = require("./../img/banner/mockup-carShare.png");

var _mockupCarShare2 = _interopRequireDefault(_mockupCarShare);

var _parking = require("./../img/banner/parking4.jpg");

var _parking2 = _interopRequireDefault(_parking);

var _mockup_elec = require("./../img/banner/mockup_elec.png");

var _mockup_elec2 = _interopRequireDefault(_mockup_elec);

var _carp_g = require("./../img/logo/carp_g.svg");

var _carp_g2 = _interopRequireDefault(_carp_g);

var _car_g = require("./../img/logo/car_g.svg");

var _car_g2 = _interopRequireDefault(_car_g);

var _park_g = require("./../img/logo/park_g.svg");

var _park_g2 = _interopRequireDefault(_park_g);

var _elec_g = require("./../img/logo/elec_g.svg");

var _elec_g2 = _interopRequireDefault(_elec_g);

var _mate = require("../img/icons/material/mate.svg");

var _mate2 = _interopRequireDefault(_mate);

var _money = require("../img/icons/material/money.svg");

var _money2 = _interopRequireDefault(_money);

var _googlePlayBadge = require("../img/icons/google-play-badge.svg");

var _googlePlayBadge2 = _interopRequireDefault(_googlePlayBadge);

var _appStoreBadge = require("../img/icons/app-store-badge.svg");

var _appStoreBadge2 = _interopRequireDefault(_appStoreBadge);

var _autoqe_gray = require("../img/logo/autoqe_gray.svg");

var _autoqe_gray2 = _interopRequireDefault(_autoqe_gray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServiceComp = function (_React$Component) {
    _inherits(ServiceComp, _React$Component);

    function ServiceComp() {
        _classCallCheck(this, ServiceComp);

        return _possibleConstructorReturn(this, (ServiceComp.__proto__ || Object.getPrototypeOf(ServiceComp)).apply(this, arguments));
    }

    _createClass(ServiceComp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "section section-main section-regular", id: "section-what-it-does" },
                _react2.default.createElement(
                    "header",
                    { className: "section-header" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "h1",
                            { className: "section-header-title" },
                            _react2.default.createElement("img", { src: _autoqe_gray2.default, height: 60 }),
                            "Ahora viajar es m\xE1s divertido, f\xE1cil y seguro"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "section-header-text" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Compart\xED lo que no usas de forma f\xE1cil y segura."
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Todas las soluciones de transporte alrededor tuyo en una \xFAnica aplicaci\xF3n:"
                            ),
                            _react2.default.createElement(_reactBootstrap.Image, { src: _googlePlayBadge2.default, height: "60" }),
                            _react2.default.createElement(_reactBootstrap.Image, { src: _appStoreBadge2.default, height: "60" })
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "grid-row-two-up-skinny" },
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement("img", { src: _carp_g2.default, className: "sub-section-icon" }),
                            _react2.default.createElement(
                                "div",
                                { className: "sub-section-text" },
                                _react2.default.createElement(
                                    "h2",
                                    { className: "sub-section-title" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        null,
                                        "Carpooling"
                                    ),
                                    " Compart\xED trayectos    "
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Divid\xED los gastos de tu viaje con otros pasajeros."
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _money2.default,
                                            className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                " Ahorr\xE1"
                                            ),
                                            "\xA0hasta un 30% por cada pasajero o trayecto"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _mate2.default,
                                            alt: "Increase Conversions", className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                "Compart\xED"
                                            ),
                                            " rutas, viajes, escapadas de fin de semana, trayectos cortos..."
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    " \xA0"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: "custom" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                    "\xA0 Encontr\xE1"
                                ),
                                "\xA0",
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: "primary" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "plus-sign" }),
                                    "\xA0 Public\xE1 trayecto:"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: _mockupCarPool2.default })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: _mockupCarShare2.default })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement("img", { src: _car_g2.default, className: "sub-section-icon" }),
                            _react2.default.createElement(
                                "div",
                                { className: "sub-section-text" },
                                _react2.default.createElement(
                                    "h2",
                                    { className: "sub-section-title" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        null,
                                        "Alquiler de Autos"
                                    ),
                                    " entre particulares"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Un veh\xEDculo a tu disposici\xF3n cuando lo necesit\xE9s."
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _money2.default, className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                "Ahorr\xE1"
                                            ),
                                            " plata en el mantenimiento del auto"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _mate2.default, className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                "Simplific\xE1"
                                            ),
                                            " tr\xE1mites con nuestra app"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _money2.default, className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                "Seguro"
                                            ),
                                            " contra todo riesgo durante el peri\xF3do del alquiler"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    " \xA0"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: "custom" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                    "\xA0 Alquil\xE1"
                                ),
                                "\xA0",
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: "primary" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "plus-sign" }),
                                    "\xA0 Public\xE1 tu Auto:"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement("img", { src: _park_g2.default, className: "sub-section-icon" }),
                            _react2.default.createElement(
                                "div",
                                { className: "sub-section-text" },
                                _react2.default.createElement(
                                    "h2",
                                    { className: "sub-section-title" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        null,
                                        "Alquiler de Cocheras"
                                    ),
                                    " entre particulares"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Un veh\xEDculo a tu disposici\xF3n cuando lo necesites. Olvidate del mantenimiento del auto."
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _money2.default,
                                            className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                "Tiempo"
                                            ),
                                            " No creeras lo f\xE1cil que es"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _money2.default, className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                "Dinero"
                                            ),
                                            " Mucho m\xE1s barato que cualquier agencia de alquiler"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    { className: "show-grid" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 1, md: 2 },
                                        _react2.default.createElement("img", { src: _money2.default,
                                            alt: "Increase Conversions", className: "sub-section-mini-icon" })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { xs: 9, md: 10 },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "b",
                                                null,
                                                "Seguro"
                                            ),
                                            " de hogar durante el periodo del alquiler"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: "custom" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                    "\xA0 Encontr\xE1"
                                ),
                                "\xA0",
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: "primary" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "plus-sign" }),
                                    "\xA0 Alquil\xE1 cochera"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: _parking2.default, style: { borderRadius: '50%' } })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: _mockup_elec2.default })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "grid-item sub-section" },
                            _react2.default.createElement("img", { src: _elec_g2.default, className: "sub-section-icon" }),
                            _react2.default.createElement(
                                "div",
                                { className: "sub-section-text" },
                                _react2.default.createElement(
                                    "h2",
                                    { className: "sub-section-title" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        null,
                                        "Alquil\xE1 Autos el\xE9ctricos"
                                    ),
                                    " por horas"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Por fin el auto el\xE9ctrico ha llegado a Buenos Aires!"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Tan facil como el servicio p\xFAblico de bicicletas."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Ahorra hasta un tercio del coste del trayecto por cada pasajero!"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: "custom" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                    "\xA0 Encontr\xE1 auto el\xE9ctrico"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ServiceComp;
}(_react2.default.Component);

exports.default = ServiceComp;
//# sourceMappingURL=Services.js.map