'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _TripActions = require('../../../actions/TripActions');

var _TripActions2 = _interopRequireDefault(_TripActions);

var _TripStore = require('../../../store/TripStore');

var _TripStore2 = _interopRequireDefault(_TripStore);

var _TripListItem = require('./TripListItem');

var _TripListItem2 = _interopRequireDefault(_TripListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Link } from 'react-router';


// We'll use this function to get a trip
// list item for each of the Trips in our list
function getTripListItem(trip) {
  return _react2.default.createElement(_TripListItem2.default, {
    key: trip.id,
    trip: trip
  });
}

var TripsComponent = function (_Component) {
  _inherits(TripsComponent, _Component);

  function TripsComponent() {
    _classCallCheck(this, TripsComponent);

    // For our initial state, we just want
    // an empty array of Trips
    var _this = _possibleConstructorReturn(this, (TripsComponent.__proto__ || Object.getPrototypeOf(TripsComponent)).call(this));

    _this.state = {
      trips: []
    };
    // We need to bind this to onChange so we can have
    // the proper this reference inside the method
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TripsComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _TripStore2.default.addChangeListener(this.onChange);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TripActions2.default.loadTrips();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TripStore2.default.removeChangeListener(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.setState({
        trips: _TripStore2.default.getTrips()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var tripListItems = void 0;
      if (this.state.trips) {
        // Map over the Trips and get an element for each of them
        tripListItems = this.state.trips.map(function (trip) {
          return getTripListItem(trip);
        });
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Table,
          { responsive: true },
          tripListItems
        )
      );
    }
  }]);

  return TripsComponent;
}(_react.Component);

exports.default = TripsComponent;
//# sourceMappingURL=Trips.js.map