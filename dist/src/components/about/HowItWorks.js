"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
                {className: "section"},
                _react2.default.createElement(
                    "header",
                    { className: "section-header" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "h1",
                            { className: "section-header-title" },
                            _react2.default.createElement("img", {
                                src: _interrog2.default,
                                className: "icon-title",
                                alt: "Secure payment"
                            }),
                            " \xA0 \xBFC\xF3mo funciona?: \xA0 ",
                            _react2.default.createElement(
                                _reactBootstrap.Label,
                                { className: "btn-fine" },
                                "S\xF3lo tres pasos!"
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
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Tabs,
                                    {defaultActiveKey: 1, id: "uncontrolled-tab-example"},
                                    _react2.default.createElement(_reactBootstrap.Tab, {
                                        eventKey: 1, title: _react2.default.createElement(
                                            "span",
                                            null,
                                            _react2.default.createElement("img", {
                                                src: _carp_g2.default,
                                                className: "main-icon"
                                            }),
                                            "\xA0 Carpooling"
                                        )
                                    }),
                                    _react2.default.createElement(
                                        _reactBootstrap.Tab,
                                        {eventKey: 2, title: "Tab 2"},
                                        "Tab 2 content"
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Tab,
                                        {eventKey: 3, title: "Tab 3", disabled: true},
                                        "Tab 3 content"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    "div",
                                    {className: " timeline-background col-lg-12"},
                                    _react2.default.createElement(
                                        "ul",
                                        {className: " timeline"},
                                        _react2.default.createElement(
                                            "li",
                                            null,
                                            _react2.default.createElement("img", {
                                                className: "timeline-image img-circle img-responsive",
                                                src: _loc4.default,
                                                alt: "1"
                                            }),
                                            _react2.default.createElement(
                                                "h1",
                                                {className: "timeline-image timeline-number"},
                                                "1"
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
                                                "2"
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