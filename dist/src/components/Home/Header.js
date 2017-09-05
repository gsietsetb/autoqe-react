"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _TripsPage = require("../Trips/TripsPage");

var _TripsPage2 = _interopRequireDefault(_TripsPage);

var _reactRouterDom = require("react-router-dom");

require("./carousel.css");

var _carp = require("../../img/icons/services/carp.svg");

var _carp2 = _interopRequireDefault(_carp);

var _rent = require("../../img/icons/services/rent.svg");

var _rent2 = _interopRequireDefault(_rent);

var _park = require("../../img/icons/services/park.svg");

var _park2 = _interopRequireDefault(_park);

var _el = require("../../img/icons/services/el.svg");

var _el2 = _interopRequireDefault(_el);

var _SearchTrip = require("../Trips/SearchTrip");

var _SearchTrip2 = _interopRequireDefault(_SearchTrip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Icons


// let cx = classNames.bind(styles);

// const styles = {
//     whiteText: {
//         index:
//     },
//     item: {
//         complete: {
//             textDecoration: "line-through"
//         },
//
//         due: {
//             color: "red"
//         }
//     },
// }

var CarouselComp = function (_React$Component) {
    _inherits(CarouselComp, _React$Component);

    // onLoadStart={(e) => this.setState({loading: true})}
    function CarouselComp(props) {
        _classCallCheck(this, CarouselComp);

        var _this = _possibleConstructorReturn(this, (CarouselComp.__proto__ || Object.getPrototypeOf(CarouselComp)).call(this, props));

        _this.state = {
            imageStatus: 'loading',
            index: 0,
            direction: 'next'
        };
        _this._setArrowContent = _this._setArrowContent.bind(_this);
        _this._setTabContent = _this._setTabContent.bind(_this);
        return _this;
    }

    _createClass(CarouselComp, [{
        key: "_setTabContent",
        value: function _setTabContent(eventKey) {
            this.setState({
                direction: this.state.index >= eventKey ? 'prev' : 'next',
                index: eventKey
            });
        }
    }, {
        key: "_setArrowContent",
        value: function _setArrowContent(selectedIndex, e) {
            this.setState({
                index: selectedIndex,
                direction: e.direction
            });
        }
    }, {
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
            // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
            // let condTab = cx({
            //     light-text
            //     // base: true,
            //     // inProgress: this.props.store.submissionInProgress,
            //     // error: this.props.store.errorOccurred,
            //     // disabled: this.props.form.valid,
            // });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _reactBootstrap.Carousel,
                    { className: "carousel-container", indicators: false, interval: 6000,
                        activeIndex: this.state.index,
                        direction: this.state.direction, onSelect: this._setArrowContent },
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Item,
                        { active: true, animateIn: true, animateOut: true, index: 0, className: "coverImg cover-carp" },
                        _react2.default.createElement(
                            "div",
                            { className: "deg-carp" },
                            _react2.default.createElement(
                                _reactBootstrap.Carousel.Caption,
                                null,
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "Carpooling: trayectos compartidos"
                                ),
                                _react2.default.createElement(_SearchTrip2.default, null),
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "Ahorr\xE1 plata compartiendo los gastos del viaje"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Item,
                        { active: true, animateIn: true, animateOut: true, index: 1, className: "coverImg cover-rent" },
                        _react2.default.createElement(
                            "div",
                            { className: "deg-rent" },
                            _react2.default.createElement(
                                _reactBootstrap.Carousel.Caption,
                                null,
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
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Item,
                        { animateIn: true, animateOut: true, index: 2, className: "coverImg cover-park" },
                        _react2.default.createElement(
                            "div",
                            { className: "deg-park" },
                            _react2.default.createElement(
                                _reactBootstrap.Carousel.Caption,
                                null,
                                _react2.default.createElement(
                                    "h1",
                                    null,
                                    "Alquiler de Cocheras entre particulares"
                                ),
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "Perd\xE9 el miedo a estacionar en el centro!"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Carousel.Item,
                        { active: true, animateIn: true, animateOut: true, index: 3, className: "coverImg cover-elec" },
                        _react2.default.createElement(
                            "div",
                            { className: "deg-elec" },
                            _react2.default.createElement(
                                _reactBootstrap.Carousel.Caption,
                                { className: "" },
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
                                    "D\xF3nde y cu\xE1ndo lo necesit\xE9s",
                                    _react2.default.createElement("p", null),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: "/green" },
                                        _react2.default.createElement(
                                            _reactBootstrap.Label,
                                            { bsSize: "lg", bsStyle: "success" },
                                            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "leaf" }),
                                            " \xA0 Ayud\xE1 al medioambiente!"
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Tab.Container,
                    { id: "header-tabs", activeKey: this.state.index, defaultActiveKey: 0,
                        onSelect: this._setTabContent },
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        { className: "clearfix header-tabs" },
                        _react2.default.createElement(
                            _reactBootstrap.Nav,
                            { bsStyle: "tabs", id: "header-tab" },
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { className: "carp-transp ", eventKey: 0 },
                                _react2.default.createElement("img", { alt: "carpool", src: _carp2.default, className: "header-icon" }),
                                _react2.default.createElement(
                                    "h4",
                                    { id: "carp-tab", className: "white-text avoid-if-small service-carp" },
                                    " \xA0Carpooling"
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { className: "rent-transp", eventKey: 1 },
                                _react2.default.createElement("img", { alt: "Private car rental", src: _rent2.default, className: "header-icon" }),
                                _react2.default.createElement(
                                    "h4",
                                    { className: "white-text avoid-if-small service-rent" },
                                    "\xA0Autos"
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { className: " park-transp ", eventKey: 2 },
                                _react2.default.createElement("img", { alt: "Private Parking spot rental", src: _park2.default, className: "header-icon" }),
                                _react2.default.createElement(
                                    "h4",
                                    { className: "white-text avoid-if-small service-park" },
                                    "\xA0Cocheras"
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.NavItem,
                                { className: " elec-transp", eventKey: 3 },
                                _react2.default.createElement("img", { alt: "Electric car", src: _el2.default, className: "header-icon" }),
                                _react2.default.createElement(
                                    "h4",
                                    { className: "white-text avoid-if-small service-elec" },
                                    "\xA0Autos el\xE9ctricos"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Tab.Content,
                            { style: { left: 0 }, animation: true },
                            _react2.default.createElement(
                                _reactBootstrap.Tab.Pane,
                                { eventKey: 0 },
                                _react2.default.createElement(_TripsPage2.default, null)
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Tab.Pane,
                                { eventKey: 1 },
                                _react2.default.createElement(_reactBootstrap.Row, null)
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Tab.Pane,
                                { eventKey: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    null,
                                    _react2.default.createElement(_TripsPage2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Tab.Pane,
                                { eventKey: 3 },
                                _react2.default.createElement(
                                    _reactBootstrap.Row,
                                    null,
                                    _react2.default.createElement(_TripsPage2.default, null)
                                )
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
//# sourceMappingURL=Header.js.map