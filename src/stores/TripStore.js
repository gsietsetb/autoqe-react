import AppDispatcher from '../dispatcher/AppDispatcher';
import TripConstants from '../constants/TripConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _trips = [];
let _trip = {};

function setTrips(trips) {
  _trips = trips;
}

function setTrip(trip) {
  _trip = trip;
}

class TripStoreClass extends EventEmitter {
  
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getTrips() {
    return _trips;
  }
  
  getTrip() {
    return _trip;
  }
  
}

const TripStore = new TripStoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
TripStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case TripConstants.RECIEVE_TRIPS:
      setTrips(action.trips);
      // We need to call emitChange so the event listener
      // knows that a change has been made
      TripStore.emitChange();
      break;
      
    case TripConstants.RECIEVE_TRIP:
      setTrip(action.trip);
      TripStore.emitChange();
      break;
      
    case TripConstants.RECIEVE_TRIP_ERROR:
      alert(action.message);
      TripStore.emitChange();
      break;
      
    case TripConstants.RECIEVE_TRIPS_ERROR:
      alert(action.message);
      TripStore.emitChange();
      break;

    default:
  }
  
});

export default TripStore;