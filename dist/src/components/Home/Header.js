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

var _banner = require("../../img/banner/banner11.jpg");

var _banner2 = _interopRequireDefault(_banner);

var _banner3 = require("../../img/banner/banner2.jpg");

var _banner4 = _interopRequireDefault(_banner3);

var _parking = require("../../img/banner/parking2.jpg");

var _parking2 = _interopRequireDefault(_parking);

var _elec = require("../../img/banner/elec.jpg");

var _elec2 = _interopRequireDefault(_elec);

var _Carousel = require("./Carousel");

var _Carousel2 = _interopRequireDefault(_Carousel);

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

var styles = {
    coverImgCarp: {
        backgroundImage: 'url(' + _banner2.default + ')'
    },
    coverImgCar: {
        backgroundImage: 'url(' + _banner4.default + ')'
    },
    coverImgPark: {
        backgroundImage: 'url(' + _parking2.default + ')'
    },
    coverImgElec: {
        backgroundImage: 'url(' + _elec2.default + ')',
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
                _react2.default.createElement(_Carousel2.default, null),
                _react2.default.createElement(
                    _reactBootstrap.Tab.Container,
                    {id: "left-tabs-example", defaultActiveKey: "first"},
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        {className: "clearfix"},
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            {sm: 4},
                            _react2.default.createElement(
                                _reactBootstrap.Nav,
                                {bsStyle: "pills", stacked: true},
                                _react2.default.createElement(
                                    _reactBootstrap.NavItem,
                                    {eventKey: "first"},
                                    "Tab 1"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.NavItem,
                                    {eventKey: "second"},
                                    "Tab 2"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            {sm: 8},
                            _react2.default.createElement(
                                _reactBootstrap.Tab.Content,
                                {animation: true},
                                _react2.default.createElement(
                                    _reactBootstrap.Tab.Pane,
                                    {eventKey: "first"},
                                    "Tab 1 content"
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Tab.Pane,
                                    {eventKey: "second"},
                                    "Tab 2 content"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HeaderComp;
}(_react2.default.Component);

exports.default = HeaderComp;
//# sourceMappingURL=Header.js.map