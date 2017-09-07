"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

require("./timeline.css");

var _steeringWheel = require("../../img/icons/material/steering-wheel.svg");

var _steeringWheel2 = _interopRequireDefault(_steeringWheel);

var _users = require("../../img/icons/material/users.svg");

var _users2 = _interopRequireDefault(_users);

var _secure_pay = require("../../img/icons/material/secure_pay.svg");

var _secure_pay2 = _interopRequireDefault(_secure_pay);

var _from_shift = require("../../img/icons/custom/from_shift.svg");

var _from_shift2 = _interopRequireDefault(_from_shift);

var _dest_shift = require("../../img/icons/custom/dest_shift.svg");

var _dest_shift2 = _interopRequireDefault(_dest_shift);

var _SearchBar = require("../Trips/SearchBar");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HowCarpooling = function (_React$Component) {
    _inherits(HowCarpooling, _React$Component);

    function HowCarpooling() {
        _classCallCheck(this, HowCarpooling);

        var _this = _possibleConstructorReturn(this, (HowCarpooling.__proto__ || Object.getPrototypeOf(HowCarpooling)).call(this));

        _this.state = {
            //By default, both selected
            kind: ['d', 'u'],
            driver: true,
            user: true,
            addTrip: 0
        };
        _this._setRole = _this._setRole.bind(_this);
        return _this;
    }

    _createClass(HowCarpooling, [{
        key: "_setRole",
        value: function _setRole(kind) {
            this.setState(kind.indexOf('d') !== -1 ? { driver: !this.state.driver } : { user: !this.state.user });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactBootstrap.Grid,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.ToggleButtonGroup,
                        { type: "checkbox", value: !this.state.kind, onChange: this._setRole },
                        _react2.default.createElement(
                            _reactBootstrap.ToggleButton,
                            { value: 'd' },
                            _react2.default.createElement(
                                "h4",
                                { style: { color: "#122b40" } },
                                _react2.default.createElement("img", { alt: "driver", src: _steeringWheel2.default, className: "icon-row" }),
                                "Conductor"
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.ToggleButton,
                            { value: 'u' },
                            _react2.default.createElement(
                                "h4",
                                { style: { color: "#74acdf" } },
                                _react2.default.createElement("img", { alt: "passenger", src: _users2.default, className: "icon-row" }),
                                "Pasajeros"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: " timeline-background col-lg-12" },
                        _react2.default.createElement(
                            "ul",
                            { className: " timeline" },
                            _react2.default.createElement(
                                _reactBootstrap.Collapse,
                                { "in": this.state.driver },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { className: "timeline-image img-circle img-responsive isDriver", src: _from_shift2.default,
                                        alt: "autoqe", onClick: function onClick() {
                                            return _this2.setState({ addTrip: !_this2.state.addTrip });
                                        } }),
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "timeline-image timeline-number-driver" },
                                        "1"
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "timeline-panel" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "timeline-heading " },
                                            _react2.default.createElement(
                                                "h2",
                                                { className: "subheading",
                                                    onClick: function onClick() {
                                                        return _this2.setState({ addTrip: !_this2.state.addTrip });
                                                    },
                                                    style: { color: '#122b40' } },
                                                "+ Public\xE1 tu viaje"
                                            ),
                                            _react2.default.createElement(
                                                _reactBootstrap.Collapse,
                                                { "in": this.state.addTrip },
                                                _react2.default.createElement(
                                                    "div",
                                                    null,
                                                    _react2.default.createElement(_SearchBar2.default, { style: { float: 'left' } })
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "h4",
                                                { className: "driver" },
                                                "A\xF1ad\xED facilmente los detalles de tu viaje \xA0"
                                            ),
                                            _react2.default.createElement(
                                                "p",
                                                null,
                                                "Puedes configurar diversas opciones"
                                            ),
                                            _react2.default.createElement(
                                                _reactBootstrap.Button,
                                                { className: "btn-mix",
                                                    onClick: function onClick() {
                                                        return _this2.setState({ addTrip: !_this2.state.addTrip });
                                                    } },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "plus-sign" }),
                                                "\xA0 Public\xE1 viaje"
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Collapse,
                                { "in": this.state.user },
                                _react2.default.createElement(
                                    "li",
                                    { className: "timeline-inverted" },
                                    _react2.default.createElement("img", { className: "timeline-image img-circle img-responsive", src: _dest_shift2.default, alt: "" }),
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "timeline-image timeline-number-user" },
                                        "1"
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "timeline-panel" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "timeline-heading" },
                                            _react2.default.createElement(
                                                "h2",
                                                { className: "subheading" },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                                " Encontr\xE1 y Reserv\xE1"
                                            ),
                                            _react2.default.createElement(
                                                "h4",
                                                null,
                                                "Busca y reserva con un m\xE9todo de \xA0",
                                                _react2.default.createElement(
                                                    _reactBootstrap.Button,
                                                    { className: "btn-green", bsStyle: "success" },
                                                    _react2.default.createElement("img", { alt: "", src: _secure_pay2.default, height: 25 }),
                                                    "\xA0 Pago seguro"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "p",
                                                null,
                                                " Filtra las opciones deseadas"
                                            ),
                                            _react2.default.createElement(
                                                _reactBootstrap.Button,
                                                { className: "btn-light_w" },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search", className: "icon-glyph" }),
                                                " Encontr\xE1 viaje"
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Collapse,
                                { "in": this.state.driver },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { className: "timeline-image img-circle img-responsive isDriver", src: _from_shift2.default,
                                        alt: "autoqe" }),
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "timeline-image timeline-number-driver" },
                                        "2"
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "timeline-panel" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "timeline-heading " },
                                            _react2.default.createElement(
                                                "h2",
                                                { className: "subheading", style: { color: '#122b40' } },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "ok" }),
                                                " Recib\xEDs la reserva"
                                            ),
                                            _react2.default.createElement(
                                                "h4",
                                                { className: "driver" },
                                                "Cuando un pasajero reserva una plaza obtienes su tel\xE9fono"
                                            ),
                                            _react2.default.createElement(
                                                "p",
                                                null,
                                                "Contactas con el para acordar lugar y hora exacta de reuni\xF3n"
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Collapse,
                                { "in": this.state.user },
                                _react2.default.createElement(
                                    "li",
                                    { className: "timeline-inverted" },
                                    _react2.default.createElement("img", { className: "timeline-image img-circle img-responsive", src: _dest_shift2.default, alt: "" }),
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "timeline-image timeline-number-user" },
                                        " 2"
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "timeline-panel" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "timeline-heading" },
                                            _react2.default.createElement(
                                                "h2",
                                                { className: "subheading" },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "road" }),
                                                " Comparten el trayecto"
                                            ),
                                            _react2.default.createElement(
                                                "h4",
                                                null,
                                                "Se encuentran y comparten juntos la experiencia"
                                            ),
                                            _react2.default.createElement(
                                                "p",
                                                null,
                                                " Al llegar a destino solo deben confirmar el trayecto y puntuar al conductor"
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Collapse,
                                { "in": this.state.driver },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { className: "timeline-image img-circle img-responsive isDriver", src: _from_shift2.default,
                                        alt: "autoqe" }),
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "timeline-image timeline-number-driver" },
                                        "3"
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "timeline-panel" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "timeline-heading " },
                                            _react2.default.createElement(
                                                "h2",
                                                { className: "subheading", style: { color: '#122b40' } },
                                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "star" }),
                                                " Valor\xE1s y recib\xEDs el dinero"
                                            ),
                                            _react2.default.createElement(
                                                "h4",
                                                { className: "driver" },
                                                "Una vez confirmado el fin del trayecto por los pasajeros, recibes el dinero."
                                            ),
                                            _react2.default.createElement(
                                                "p",
                                                null,
                                                "Acordate de poner una valoraci\xF3n de cada pasajero, es la mejor manera de saber en quien confiar!"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HowCarpooling;
}(_react2.default.Component);

exports.default = HowCarpooling;
//# sourceMappingURL=HowCarpooling.js.map