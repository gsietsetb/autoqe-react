"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _HowCarpooling = require("./HowCarpooling");

var _HowCarpooling2 = _interopRequireDefault(_HowCarpooling);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _carp = require("../../img/icons/services/carp.svg");

var _carp2 = _interopRequireDefault(_carp);

var _rent = require("../../img/icons/services/rent.svg");

var _rent2 = _interopRequireDefault(_rent);

var _park = require("../../img/icons/services/park.svg");

var _park2 = _interopRequireDefault(_park);

var _el = require("../../img/icons/services/el.svg");

var _el2 = _interopRequireDefault(_el);

var _quest = require("../../img/icons/material/quest.svg");

var _quest2 = _interopRequireDefault(_quest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Icons


// import MediaQuery from "react-responsive";

// const Default = ({children}) => <Responsive minWidth={768} children={children}/>;
var Mobile = function Mobile(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(_reactResponsive2.default, { maxWidth: 768, children: children });
};
// var MediaQuery = require('react-responsive');


var HowWorksComp = function (_React$Component) {
    _inherits(HowWorksComp, _React$Component);

    function HowWorksComp() {
        _classCallCheck(this, HowWorksComp);

        return _possibleConstructorReturn(this, (HowWorksComp.__proto__ || Object.getPrototypeOf(HowWorksComp)).apply(this, arguments));
    }

    _createClass(HowWorksComp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "section" },
                _react2.default.createElement(
                    "header",
                    { className: "section-header" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "h1",
                            { className: "section-header-title" },
                            _react2.default.createElement("img", { src: _quest2.default, className: "icon-row", alt: "Secure payment" }),
                            " \xA0 \xBFC\xF3mo funciona?"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "sectio9n-header-text", height: 500 },
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Tu soluci\xF3n de transporte en tres pasos "
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Tabs,
                                    { defaultActiveKey: 1, id: "uncontrolled-tab-example" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Tab,
                                        { eventKey: 1, title: _react2.default.createElement(
                                                "span",
                                                { className: "service-carp" },
                                                _react2.default.createElement("img", { alt: "", src: _carp2.default, className: "main-icon" }),
                                                "\xA0",
                                                _react2.default.createElement(
                                                    "b",
                                                    { className: "avoid-if-small" },
                                                    "Carpooling"
                                                )
                                            ) },
                                        _react2.default.createElement(_HowCarpooling2.default, null)
                                    ),
                                    _react2.default.createElement(_reactBootstrap.Tab, { eventKey: 2, title: _react2.default.createElement(
                                            "span",
                                            { className: "service-rent" },
                                            _react2.default.createElement("img", { alt: "", src: _rent2.default, className: "main-icon" }),
                                            "\xA0",
                                            _react2.default.createElement(
                                                "b",
                                                { className: "avoid-if-small" },
                                                "Alquiler de Autos"
                                            )
                                        ) }),
                                    _react2.default.createElement(_reactBootstrap.Tab, { eventKey: 3, title: _react2.default.createElement(
                                            "span",
                                            { className: "service-park" },
                                            _react2.default.createElement("img", { alt: "", src: _park2.default, className: "main-icon" }),
                                            "\xA0",
                                            _react2.default.createElement(
                                                "b",
                                                { className: "avoid-if-small" },
                                                "Alquiler de Cocheras"
                                            )
                                        ) }),
                                    _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { maxWidth: 768 },
                                        _react2.default.createElement(_reactBootstrap.Tab, { eventKey: 4, title: _react2.default.createElement(
                                                "span",
                                                { className: "service-elec" },
                                                _react2.default.createElement("img", { alt: "", src: _el2.default, className: "main-icon" }),
                                                "\xA0",
                                                _react2.default.createElement(
                                                    "b",
                                                    { className: "avoid-if-small" },
                                                    " Autos el\xE9ctricos \xA0"
                                                ),
                                                _react2.default.createElement(
                                                    _reactBootstrap.Label,
                                                    {
                                                        className: "avoid-if-small", bsStyle: "warning" },
                                                    "Pr\xF3x."
                                                )
                                            ) })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HowWorksComp;
}(_react2.default.Component);

exports.default = HowWorksComp;
//# sourceMappingURL=HowItWorks.js.map