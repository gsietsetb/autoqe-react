import AppDispatcher from '../dispatcher/AppDispatcher';
import TripConstants from '../constants/TripConstants';
import TripsAPI from '../utils/TripsAPI';


const api_url = 'https://api.autoqe.com/';

export default {

  recieveTrips: () => {
    TripsAPI
      .getTrips(api_url+'api/trips')
      .then(trips => {
        AppDispatcher.dispatch({
          actionType: TripConstants.RECIEVE_TRIPS,
          trips: trips
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: TripConstants.RECIEVE_TRIPS_ERROR,
          message: message
        });
      });
  },

  getTrip: (id) => {
    TripsAPI
      .getTrip(api_url+'api/trips/' + id)
      .then(trip => {
        AppDispatcher.dispatch({
          actionType: TripConstants.RECIEVE_TRIP,
          trip: trip
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: TripConstants.RECIEVE_TRIP_ERROR,
          message: message
        });
      });
  }

}
