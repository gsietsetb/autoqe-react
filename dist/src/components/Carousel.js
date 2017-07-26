"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _banner = require("./../img/banner/banner11.jpg");

var _banner2 = _interopRequireDefault(_banner);

var _banner3 = require("./../img/banner/banner2.jpg");

var _banner4 = _interopRequireDefault(_banner3);

var _parking = require("./../img/banner/parking2.jpg");

var _parking2 = _interopRequireDefault(_parking);

var _elec_banner_def = require("./../img/banner/elec_banner_def.jpg");

var _elec_banner_def2 = _interopRequireDefault(_elec_banner_def);

var _carp_g = require("./../img/logo/carp_g.svg");

var _carp_g2 = _interopRequireDefault(_carp_g);

var _car_g = require("./../img/logo/car_g.svg");

var _car_g2 = _interopRequireDefault(_car_g);

var _park_g = require("./../img/logo/park_g.svg");

var _park_g2 = _interopRequireDefault(_park_g);

var _elec_g = require("./../img/logo/elec_g.svg");

var _elec_g2 = _interopRequireDefault(_elec_g);

var _reactRotatingText = require("react-rotating-text");

var _reactRotatingText2 = _interopRequireDefault(_reactRotatingText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    coverImgCarp: {
        height: '80vh',
        background: '',
        backgroundImage: 'url(' + _banner2.default + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right'
    },
    coverImgCar: {
        height: '80vh',
        backgroundImage: 'url(' + _banner4.default + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    coverImgPark: {
        height: '80vh',
        backgroundImage: 'url(' + _parking2.default + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    coverImgElec: {
        height: '80vh',
        backgroundImage: 'url(' + _elec_banner_def2.default + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    },
    darkText: {
        color: '#122b40'
    },
    labeledButton: {
        backgroundColor: 'rgba(224, 253, 255, 0.4)'
    },
    subButton: {
        color: 'white',
        backgroundColor: 'rgba(116, 172, 223,0.2)'
    }
};

// bootstrapUtils.addStyle(Label, 'white');

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
            return _react2.default.createElement(
                _reactBootstrap.Carousel,
                { style: { height: '80vh' }, interval: 6000, onSelect: this.slide = false },
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    { style: styles.coverImgCarp, className: "filter" },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        null,
                        _react2.default.createElement(
                            "h2",
                            { style: { fontFamily: 'AllertaStencil' } },
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                { bsSize: "lg", className: "btn-white" },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                " \xA0 \xA0",
                                _react2.default.createElement(_reactRotatingText2.default, {items: [' Encontrá ', ' Publicá ', ' Compartí ']}),
                                " \xA0 \xA0",
                                _react2.default.createElement("img", { src: _carp_g2.default, height: 60 }),
                                "\xA0 TRAYECTO"
                            )
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                {bsSize: "lg", className: "btn-fine"},
                                "Compart\xED los gastos del viaje, ahorr\xE1 plata"
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    { style: styles.coverImgCar },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        null,
                        _react2.default.createElement(
                            "h2",
                            { style: { fontFamily: 'AllertaStencil' } },
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                { bsSize: "lg", className: "btn-white" },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                _react2.default.createElement(_reactRotatingText2.default, {items: [' Alquilá tu ', ' Encontrá ']}),
                                " \xA0 \xA0",
                                _react2.default.createElement("img", { src: _car_g2.default, height: 60 }),
                                "\xA0 AUTO"
                            )
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                {bsSize: "lg", className: "btn-fine"},
                                "Alquiler de Auto entre particulares"
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    { style: styles.coverImgPark },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        null,
                        _react2.default.createElement(
                            "h2",
                            { style: { fontFamily: 'AllertaStencil' } },
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                { bsSize: "lg", className: "btn-white" },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                _react2.default.createElement(_reactRotatingText2.default, {items: [' Alquilá tu ', ' Encontrá ']}),
                                " \xA0 \xA0",
                                _react2.default.createElement("img", { src: _park_g2.default, height: 60 }),
                                "\xA0 COCHERA"
                            )
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                {bsSize: "lg", className: "btn-fine"},
                                "Alquiler de Cocheras entre particulares"
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Carousel.Item,
                    { style: styles.coverImgElec },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Caption,
                        { style: { top: '25vh' } },
                        _react2.default.createElement(
                            "h2",
                            { style: { fontFamily: 'AllertaStencil' } },
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                { bsSize: "lg", className: "btn-white" },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "search" }),
                                _react2.default.createElement(_reactRotatingText2.default, {items: [' Alquilá por horas un ', ' Encontrá un ']}),
                                " \xA0 \xA0",
                                _react2.default.createElement("img", { src: _elec_g2.default, height: 60 }),
                                "\xA0 AUTO EL\xC9CTRICO"
                            )
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                {bsSize: "lg", className: "btn-fine"},
                                "Ayud\xE1 al medioambiente con un transporte sostenible"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CarouselComp;
}(_react2.default.Component);

exports.default = CarouselComp;
//# sourceMappingURL=Carousel.js.map