"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _carpool = require("../../img/header/carpool.jpg");

var _carpool2 = _interopRequireDefault(_carpool);

var _rental = require("../../img/header/rental.jpg");

var _rental2 = _interopRequireDefault(_rental);

var _parking = require("../../img/header/parking.jpg");

var _parking2 = _interopRequireDefault(_parking);

var _elec = require("../../img/header/elec.jpg");

var _elec2 = _interopRequireDefault(_elec);

var _carp_g = require("../../img/logo/carp_g.svg");

var _carp_g2 = _interopRequireDefault(_carp_g);

var _car_g = require("../../img/logo/car_g.svg");

var _car_g2 = _interopRequireDefault(_car_g);

var _park_g = require("../../img/logo/park_g.svg");

var _park_g2 = _interopRequireDefault(_park_g);

var _elec_g = require("../../img/logo/elec_g.svg");

var _elec_g2 = _interopRequireDefault(_elec_g);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    coverImgCarp: {
        backgroundPosition: 'top',
        backgroundImage: 'url(' + _carpool2.default + ')'
    },
    coverImgCar: {
        backgroundImage: 'url(' + _rental2.default + ')'
    },
    coverImgPark: {
        backgroundPosition: 'top',
        backgroundImage: 'url(' + _parking2.default + ')'
    },
    coverImgElec: {
        backgroundPosition: 'bottom',
        backgroundImage: 'url(' + _elec2.default + ')'
    }
};

var CarouselComp = function (_React$Component) {
    _inherits(CarouselComp, _React$Component);

    // onLoadStart={(e) => this.setState({loading: true})}
    function CarouselComp(props) {
        _classCallCheck(this, CarouselComp);

        var _this = _possibleConstructorReturn(this, (CarouselComp.__proto__ || Object.getPrototypeOf(CarouselComp)).call(this, props));

        _this.state = { imageStatus: 'loading' };
        return _this;
    }

    _createClass(CarouselComp, [{
        key: "handleImageLoaded",
        value: function handleImageLoaded() {
            this.setState({ imageStatus: 'loaded' });
        }
    }, {
        key: "handleImageErrored",
        value: function handleImageErrored() {
            this.setState({ imageStatus: 'failed to load' });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactBootstrap.Carousel,
                { className: "carousel-container", interval: 6000, onSelect: function onSelect() {
                        return _this2.slide = false;
                    } },
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    {style: styles.coverImgCarp, className: "coverImg"},
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        null,
                        _react2.default.createElement("img", {src: _carp_g2.default}),
                        _react2.default.createElement(
                            "h1",
                            null,
                            "Carpooling: trayectos compartidos"
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            "Compart\xED los gastos del viaje, ahorr\xE1 plata"
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    { style: styles.coverImgCar, className: "coverImg" },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        {className: "dark-color"},
                        _react2.default.createElement("img", {src: _car_g2.default}),
                        _react2.default.createElement(
                            "h1",
                            null,
                            "Alquiler de Auto entre particulares"
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            "Rentabiliz\xE1 tu auto mientras no lo us\xE1s"
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    { style: styles.coverImgPark, className: "coverImg" },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        null,
                        _react2.default.createElement("img", {src: _park_g2.default}),
                        _react2.default.createElement(
                            "h1",
                            null,
                            "Alquiler de Cocheras entre particulares"
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            "Perdele el miedo a ir al centro en auto!"
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    { style: styles.coverImgElec, className: "coverImg" },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        {className: "dark-color"},
                        _react2.default.createElement("img", {src: _elec_g2.default}),
                        _react2.default.createElement(
                            "h1",
                            null,
                            " Alquiler de ",
                            _react2.default.createElement(
                                "b",
                                null,
                                "AUTOS EL\xC9CTRICOS"
                            ),
                            " por horas"
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/green" },
                                _react2.default.createElement(
                                    _reactBootstrap.Label,
                                    { bsSize: "lg", bsStyle: "success" },
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "leaf" }),
                                    " \xA0 Ayud\xE1 al medioambiente!"
                                )
                            ),
                            _react2.default.createElement("p", null),
                            "D\xF3nde y cu\xE1ndo lo necesit\xE9s"
                        )
                    ),
                    "x"
                )
            );
        }
    }]);

    return CarouselComp;
}(_react2.default.Component);

exports.default = CarouselComp;
//# sourceMappingURL=Carousel.js.map