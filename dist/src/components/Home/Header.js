"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _Carousel = require("./Carousel");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _carp = require("../../img/icons/services/carp.svg");

var _carp2 = _interopRequireDefault(_carp);

var _rent = require("../../img/icons/services/rent.svg");

var _rent2 = _interopRequireDefault(_rent);

var _park = require("../../img/icons/services/park.svg");

var _park2 = _interopRequireDefault(_park);

var _el = require("../../img/icons/services/el.svg");

var _el2 = _interopRequireDefault(_el);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

//Icons


var HeaderComp = function (_React$Component) {
    _inherits(HeaderComp, _React$Component);

    // onLoadStart={(e) => this.setState({loading: true})}
    function HeaderComp(props) {
        _classCallCheck(this, HeaderComp);

        var _this = _possibleConstructorReturn(this, (HeaderComp.__proto__ || Object.getPrototypeOf(HeaderComp)).call(this, props));

        _this.state = {imageStatus: 'loading'};
        return _this;
    }

    _createClass(HeaderComp, [{
        key: "handleImageLoaded",
        value: function handleImageLoaded() {
            this.setState({imageStatus: 'loaded'});
        }
    }, {
        key: "handleImageErrored",
        value: function handleImageErrored() {
            this.setState({imageStatus: 'failed to load'});
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Tabs,
                        {defaultActiveKey: 1, id: "uncontrolled-tab-example"},
                        _react2.default.createElement(_reactBootstrap.Tab, {
                            eventKey: 1, title: _react2.default.createElement(
                                "span",
                                {className: "service-carp"},
                                _react2.default.createElement("img", {
                                    alt: "",
                                    src: _carp2.default,
                                    className: "main-icon"
                                }),
                                "\xA0",
                                _react2.default.createElement(
                                    "b",
                                    null,
                                    "Carpooling"
                                )
                            )
                        }),
                        _react2.default.createElement(_reactBootstrap.Tab, {
                            eventKey: 2, title: _react2.default.createElement(
                                "span",
                                {className: "service-rent"},
                                _react2.default.createElement("img", {
                                    alt: "",
                                    src: _rent2.default,
                                    className: "main-icon"
                                }),
                                "\xA0 Alquiler de Autos"
                            )
                        }),
                        _react2.default.createElement(_reactBootstrap.Tab, {
                            eventKey: 3, title: _react2.default.createElement(
                                "span",
                                {className: "service-park"},
                                _react2.default.createElement("img", {
                                    alt: "",
                                    src: _park2.default,
                                    className: "main-icon"
                                }),
                                "\xA0 Alquiler de Cocheras"
                            )
                        }),
                        _react2.default.createElement(_reactBootstrap.Tab, {
                            eventKey: 4, disabled: true, title: _react2.default.createElement(
                                "span",
                                {className: "service-elec"},
                                _react2.default.createElement("img", {
                                    alt: "",
                                    src: _el2.default,
                                    className: "main-icon"
                                }),
                                "\xA0 Autos el\xE9ctricos \xA0",
                                _react2.default.createElement(
                                    _reactBootstrap.Label,
                                    {bsStyle: "warning"},
                                    "Pr\xF3x."
                                )
                            )
                        })
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(_Carousel2.default, null)
                )
            );
        }
    }]);

    return HeaderComp;
}(_react2.default.Component);

exports.default = HeaderComp;
//# sourceMappingURL=Header.js.map