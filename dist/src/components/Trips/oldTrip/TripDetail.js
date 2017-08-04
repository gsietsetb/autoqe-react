'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TripActions = require('../../../actions/TripActions');

var _TripActions2 = _interopRequireDefault(_TripActions);

var _TripStore = require('../../../store/TripStore');

var _TripStore2 = _interopRequireDefault(_TripStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TripDetailComponent = function (_Component) {
  _inherits(TripDetailComponent, _Component);

  function TripDetailComponent() {
    _classCallCheck(this, TripDetailComponent);

    var _this = _possibleConstructorReturn(this, (TripDetailComponent.__proto__ || Object.getPrototypeOf(TripDetailComponent)).call(this));

    _this.state = {
      trip: {}
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TripDetailComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _TripStore2.default.addChangeListener(this.onChange);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TripActions2.default.getTrip(this.props.params.id);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TripStore2.default.removeChangeListener(this.onChange);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _TripActions2.default.getTrip(nextProps.params.id);
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.setState({
        trip: _TripStore2.default.getTrip(this.props.params.id)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var trip = void 0;
      if (Object.keys(this.state.trip).length !== 0) {
        trip = this.state.trip[0];
      }
      return _react2.default.createElement(
        'div',
        null,
        Object.keys(this.state.trip).length !== 0 && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { src: trip.image, width: '150' }),
          _react2.default.createElement(
            'h1',
            null,
            trip.from
          ),
          _react2.default.createElement(
            'h3',
            null,
            trip.to
          )
        )
      );
    }
  }]);

  return TripDetailComponent;
}(_react.Component);

exports.default = TripDetailComponent;
//# sourceMappingURL=TripDetail.js.map