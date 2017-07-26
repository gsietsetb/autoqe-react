"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _BA = require("../img/brands/BA2016.png");

var _BA2 = _interopRequireDefault(_BA);

var _colon = require("../img/brands/colon.png");

var _colon2 = _interopRequireDefault(_colon);

var _logoSura = require("../img/brands/logo-sura.png");

var _logoSura2 = _interopRequireDefault(_logoSura);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TalkAboutComp = function (_React$Component) {
    _inherits(TalkAboutComp, _React$Component);

    function TalkAboutComp() {
        _classCallCheck(this, TalkAboutComp);

        return _possibleConstructorReturn(this, (TalkAboutComp.__proto__ || Object.getPrototypeOf(TalkAboutComp)).apply(this, arguments));
    }

    _createClass(TalkAboutComp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "section section-main", id: "section-what-it-does" },
                _react2.default.createElement(
                    "header",
                    { className: "section-header" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "section-header-text" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Con el soporte de:"
                            ),
                            _react2.default.createElement(_reactBootstrap.Image, { src: _BA2.default, height: "60" }),
                            _react2.default.createElement(_reactBootstrap.Image, { src: _colon2.default, height: "60" }),
                            _react2.default.createElement(_reactBootstrap.Image, { src: _logoSura2.default, height: "60" })
                        )
                    )
                )
            );
        }
    }]);

    return TalkAboutComp;
}(_react2.default.Component);

exports.default = TalkAboutComp;
//# sourceMappingURL=TalkAbout.js.map