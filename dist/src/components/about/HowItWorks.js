"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _easySteps = require("../../img/banner/easy-steps.png");

var _easySteps2 = _interopRequireDefault(_easySteps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                { className: "section section-dark" },
                _react2.default.createElement(
                    "header",
                    { className: "section-header" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "h1",
                            { className: "section-header-title" },
                            "\xBFC\xF3mo funciona?: \xA0 ",
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                { className: "btn-fine" },
                                "Solo tres pasos!"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "section-header-text", height: 500 },
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Tu soluci\xF3n de transporte en tres pasos  "
                            ),
                            _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: _easySteps2.default, height: 400 })
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