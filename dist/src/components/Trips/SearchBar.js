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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _carp_g = require("../../img/logo/carp_g.svg");

var _carp_g2 = _interopRequireDefault(_carp_g);

var _loc = require("../../img/icons/material/loc1.svg");

var _loc2 = _interopRequireDefault(_loc);

var _loc3 = require("../../img/icons/material/loc3.svg");

var _loc4 = _interopRequireDefault(_loc3);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

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
// import Autocomplete from 'react-google-autocomplete';


var SearchBarComp = function (_React$Component) {
    _inherits(SearchBarComp, _React$Component);

    function SearchBarComp(props) {
        _classCallCheck(this, SearchBarComp);

        var _this = _possibleConstructorReturn(this, (SearchBarComp.__proto__ || Object.getPrototypeOf(SearchBarComp)).call(this, props));

        _this.state = {
            startDate: (0, _moment2.default)(),
            address: 'Buenos Aires, Ar'
        };
        _this.onChange = function (address) {
            return _this.setState({address: address});
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SearchBarComp, [{
        key: "handleChange",
        value: function handleChange(date) {
            this.setState({
                startDate: date
            });
        }
    }, {
        key: "render",
        value: function render() {
            var inputProps = {
                value: this.state.address,
                onChange: this.onChange
            };

            return _react2.default.createElement(
                "div",
                {className: "Container", style: {textAlign: 'center'}},
                _react2.default.createElement(
                    _reactResponsive2.default,
                    {maxDeviceWidth: 740},
                    _react2.default.createElement("img", {src: _carp_g2.default, className: "main-icon"}),
                    " \xA0",
                    _react2.default.createElement(
                        "h4",
                        {style: {display: 'inline'}},
                        _react2.default.createElement(
                            _reactBootstrap.Label,
                            {className: "btn-light_w", bsSize: "lg"},
                            "Carpooling"
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Form,
                    {inline: true, style: {display: 'inline-block'}},
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        {controlId: "formInlineFrom", style: {display: 'inline'}},
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            null,
                            " \xA0  \xA0 De: \xA0 "
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.InputGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.InputGroup.Addon,
                                {style: {minWidth: 36}},
                                _react2.default.createElement("img", {
                                    src: _loc2.default,
                                    style: {marginLeft: -10},
                                    height: 30
                                })
                            ),
                            _react2.default.createElement(_reactBootstrap.FormControl, {
                                style: {height: 'unset'},
                                type: "text",
                                placeholder: "Buenos Aires"
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        {controlId: "formInlineFrom", style: {display: 'inline-block'}},
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            null,
                            " \xA0 \xA0 A: \xA0 "
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.InputGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.InputGroup.Addon,
                                {style: {minWidth: 36}},
                                _react2.default.createElement("img", {
                                    src: _loc4.default,
                                    style: {marginLeft: -10},
                                    height: 30
                                })
                            ),
                            _react2.default.createElement(_reactBootstrap.FormControl, {
                                style: {height: 'unset'}, height: 30, className: "inputForm", type: "text",
                                placeholder: "C\xF3rdoba"
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        {controlId: "formInlineFrom"},
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            null,
                            " \xA0 \xA0 Cu\xE1ndo: \xA0 "
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.InputGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.InputGroup.Addon,
                                {style: {minWidth: 32}},
                                _react2.default.createElement(_reactBootstrap.Glyphicon, {glyph: "calendar"})
                            ),
                            _react2.default.createElement(_reactBootstrap.FormControl, {
                                className: "inputForm",
                                type: "date",
                                placeholder: "Hoy"
                            })
                        ),
                        "\xA0",
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            {type: "submit", className: "btn-light_w", style: {display: 'inline'}},
                            _react2.default.createElement(_reactBootstrap.Glyphicon, {glyph: "search"}),
                            " \xA0 Encontr\xE1 tu viaje"
                        )
                    ),
                    "\xA0 \xA0"
                )
            );
        }
    }]);

    return SearchBarComp;
}(_react2.default.Component);

exports.default = SearchBarComp;
//# sourceMappingURL=SearchBar.js.map