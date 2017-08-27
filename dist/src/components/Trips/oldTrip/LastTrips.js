'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _carp = require('../../../img/icons/services/carp.svg');

var _carp2 = _interopRequireDefault(_carp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TripGrid = function (_Component) {
    _inherits(TripGrid, _Component);

    function TripGrid() {
        _classCallCheck(this, TripGrid);

        return _possibleConstructorReturn(this, (TripGrid.__proto__ || Object.getPrototypeOf(TripGrid)).apply(this, arguments));
    }

    _createClass(TripGrid, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'section section-regular' },
                _react2.default.createElement(
                    _reactBootstrap.Panel,
                    { bsStyle: 'primary', collapsible: true, defaultExpanded: true,
                        header: _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('img', { alt: '', src: _carp2.default, height: 40 }),
                            ' \xA0',
                            _react2.default.createElement(
                                'h4',
                                { style: { display: 'inline' } },
                                ' \xDAltimos viajes publicados: \xA0 \xA0 ',
                                _react2.default.createElement(_reactBootstrap.Glyphicon, {
                                    glyph: 'triangle-bottom' })
                            )
                        ) },
                    _react2.default.createElement(
                        _reactBootstrap.ListGroup,
                        { fill: true },
                        _react2.default.createElement(_reactBootstrap.ListGroupItem, null)
                    )
                )
            );
        }
    }]);

    return TripGrid;
}(_react.Component);

exports.default = TripGrid;
//# sourceMappingURL=LastTrips.js.map