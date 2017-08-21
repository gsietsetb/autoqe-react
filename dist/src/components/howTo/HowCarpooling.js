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

var _interrog = require("../../img/icons/material/interrog.svg");

var _interrog2 = _interopRequireDefault(_interrog);

require("./timeline.css");

var _loc = require("../../img/icons/material/loc1.svg");

var _loc2 = _interopRequireDefault(_loc);

var _carp_g = require("../../img/logo/carp_g.svg");

var _carp_g2 = _interopRequireDefault(_carp_g);

var _car_g = require("../../img/logo/car_g.svg");

var _car_g2 = _interopRequireDefault(_car_g);

var _park_g = require("../../img/logo/park_g.svg");

var _park_g2 = _interopRequireDefault(_park_g);

var _elec_g = require("../../img/logo/elec_g.svg");

var _elec_g2 = _interopRequireDefault(_elec_g);

var _loc3 = require("../../img/icons/material/loc2.svg");

var _loc4 = _interopRequireDefault(_loc3);

var _loc5 = require("../../img/icons/material/loc3.svg");

var _loc6 = _interopRequireDefault(_loc5);

var _easySteps = require("../../img/banner/easy-steps.png");

var _easySteps2 = _interopRequireDefault(_easySteps);

var _SearchBar = require("../Trips/SearchBar");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

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

//
// function onKindChange(value) {
//     this.setState({ value });
// }

var HowCarpooling = function (_React$Component) {
    _inherits(HowCarpooling, _React$Component);

    function HowCarpooling(props) {
        _classCallCheck(this, HowCarpooling);

        var _this = _possibleConstructorReturn(this, (HowCarpooling.__proto__ || Object.getPrototypeOf(HowCarpooling)).call(this, props));

        _this.addTrip = {};
        _this.searchBar = {};
        _this.kind = {
            //By default, both selected
            value: [1, 2]
        };
        return _this;
    }

    // onKindChange = (value) => {
    //     this.setState({ value });
    // };

    _createClass(HowCarpooling, [{
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
                        "h3",
                        null,
                        "hola, esto es: ",
                        this.kind.value[0],
                        " queso!",
                        _react2.default.createElement(
                            _reactBootstrap.ToggleButtonGroup,
                            {type: "checkbox", value: this.kind.value, onChange: onKindChange},
                            _react2.default.createElement(
                                _reactBootstrap.ToggleButton,
                                {value: 1},
                                _react2.default.createElement(
                                    "span",
                                    {style: {color: "#122b40"}},
                                    "Conductor"
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.ToggleButton,
                                {value: 2},
                                _react2.default.createElement(
                                    "span",
                                    {style: {color: "#74acdf"}},
                                    "Pasajero"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        {className: " timeline-background col-lg-12"},
                        _react2.default.createElement(
                            "ul",
                            {className: " timeline"},
                            _react2.default.createElement(
                                _reactBootstrap.Collapse,
                                {"in": !this.kind.value[0]},
                                _react2.default.createElement(
                                    "li",
                                    {className: "driver"},
                                    _react2.default.createElement("img", {
                                        className: "timeline-image img-circle img-responsive",
                                        src: _loc4.default,
                                        alt: "autoqe",
                                        onClick: function onClick() {
                                            return _this2.setState({open: !_this2.addTrip.open});
                                        }
                                    }),
                                    _react2.default.createElement(
                                        "h1",
                                        {className: "timeline-image timeline-number-cond"},
                                        "+"
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        {className: "timeline-panel"},
                                        _react2.default.createElement(
                                            "div",
                                            {className: "timeline-heading "},
                                            _react2.default.createElement(
                                                "h2",
                                                {
                                                    className: "subheading", onClick: function onClick() {
                                                    return _this2.setState({open: !_this2.addTrip.open});
                                                }, style: {color: '#122b40'}
                                                },
                                                "Public\xE1 tu viaje"
                                            ),
                                            _react2.default.createElement(
                                                _reactBootstrap.Collapse,
                                                {"in": this.addTrip.open},
                                                _react2.default.createElement(
                                                    "div",
                                                    null,
                                                    " ",
                                                    _react2.default.createElement(_SearchBar2.default, {style: {float: 'left'}})
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "h4",
                                                {style: {color: '#74acdf'}, className: "driver"},
                                                "A\xF1ad\xED facilmente los detalles de tu viaje \xA0",
                                                _react2.default.createElement(
                                                    _reactBootstrap.Button,
                                                    {
                                                        bsStyle: "primary", onClick: function onClick() {
                                                        return _this2.setState({open: !_this2.addTrip.open});
                                                    }
                                                    },
                                                    _react2.default.createElement(_reactBootstrap.Glyphicon, {glyph: "plus-sign"}),
                                                    "\xA0 Public\xE1 trayecto:"
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                {className: "timeline-inverted"},
                                _react2.default.createElement("img", {
                                    className: "timeline-image img-circle img-responsive",
                                    src: _loc4.default,
                                    alt: ""
                                }),
                                _react2.default.createElement(
                                    "h3",
                                    {className: "timeline-image timeline-number"},
                                    _react2.default.createElement(_reactBootstrap.Glyphicon, {glyph: "search"})
                                ),
                                _react2.default.createElement(
                                    "div",
                                    {className: "timeline-panel"},
                                    _react2.default.createElement(
                                        "div",
                                        {className: "timeline-heading"},
                                        _react2.default.createElement(
                                            "h2",
                                            {className: "subheading"},
                                            _react2.default.createElement(_reactBootstrap.Glyphicon, {glyph: "search"}),
                                            "\xA0 Busc\xE1 viaje"
                                        ),
                                        _react2.default.createElement(
                                            "h4",
                                            null,
                                            " Map Portfolio template"
                                        ),
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            " Designer and publisher"
                                        ),
                                        _react2.default.createElement(
                                            "h5",
                                            {className: "date"},
                                            "Jun '17"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement("img", {
                                    className: "timeline-image img-circle img-responsive",
                                    src: _loc4.default,
                                    alt: ""
                                }),
                                _react2.default.createElement(
                                    "h1",
                                    {className: "timeline-image timeline-number"},
                                    "3"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    {className: "timeline-panel"},
                                    _react2.default.createElement(
                                        "div",
                                        {className: "timeline-heading"},
                                        _react2.default.createElement(
                                            "h2",
                                            {className: "subheading"},
                                            "Public\xE1 viaje"
                                        ),
                                        _react2.default.createElement(
                                            "h4",
                                            null,
                                            "Personal webpage template"
                                        ),
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            "Designer and publisher"
                                        ),
                                        _react2.default.createElement(
                                            "h5",
                                            {className: "date"},
                                            "Naples, Aug '17"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                {className: "timeline-inverted"},
                                _react2.default.createElement("img", {
                                    className: "timeline-image img-circle img-responsive",
                                    src: _loc4.default,
                                    alt: ""
                                }),
                                _react2.default.createElement(
                                    "h1",
                                    {className: "timeline-image timeline-number"},
                                    "4"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    {className: "timeline-panel"},
                                    _react2.default.createElement(
                                        "div",
                                        {className: "timeline-heading"},
                                        _react2.default.createElement(
                                            "h2",
                                            {className: "subheading", href: "https://www.ganomad.com/"},
                                            "Ganomad"
                                        ),
                                        _react2.default.createElement(
                                            "h4",
                                            null,
                                            " Map Portfolio template"
                                        ),
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            " Designer and publisher"
                                        ),
                                        _react2.default.createElement(
                                            "h5",
                                            {className: "date"},
                                            "Jun '17"
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