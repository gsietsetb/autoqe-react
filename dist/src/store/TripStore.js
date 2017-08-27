'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _TripConstants = require('../constants/TripConstants');

var _TripConstants2 = _interopRequireDefault(_TripConstants);

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHANGE_EVENT = 'change';

var _trips = [];
var _trip = {};

function setTrips(trips) {
  _trips = trips;
}

function setTrip(trip) {
  _trip = trip;
}

var TripStoreClass = function (_EventEmitter) {
  _inherits(TripStoreClass, _EventEmitter);

  function TripStoreClass() {
    _classCallCheck(this, TripStoreClass);

    return _possibleConstructorReturn(this, (TripStoreClass.__proto__ || Object.getPrototypeOf(TripStoreClass)).apply(this, arguments));
  }

  _createClass(TripStoreClass, [{
    key: 'emitChange',
    value: function emitChange() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }, {
    key: 'getTrips',
    value: function getTrips() {
      return _trips;
    }
  }, {
    key: 'getTrip',
    value: function getTrip() {
      return _trip;
    }
  }]);

  return TripStoreClass;
}(_events.EventEmitter);

var TripStore = new TripStoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
TripStore.dispatchToken = _AppDispatcher2.default.register(function (action) {

  switch (action.actionType) {
    case _TripConstants2.default.RECIEVE_TRIPS:
      setTrips(action.trips);
      // We need to call emitChange so the event listener
      // knows that a change has been made
      TripStore.emitChange();
      break;

    case _TripConstants2.default.RECIEVE_TRIP:
      setTrip(action.trip);
      TripStore.emitChange();
      break;

    case _TripConstants2.default.RECIEVE_TRIP_ERROR:
      alert(action.message);
      TripStore.emitChange();
      break;

    case _TripConstants2.default.RECIEVE_TRIPS_ERROR:
      alert(action.message);
      TripStore.emitChange();
      break;

    default:
  }
});

exports.default = TripStore;
//# sourceMappingURL=TripStore.js.map