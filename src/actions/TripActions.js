import tripApi from '../api/TripsAPI';
import * as types from './actionTypes';

export function loadTripsSuccess(trips) {
    return {type: types.LOAD_TRIPS_SUCCESS, trips};
}

export function updateTripSuccess(trip) {
    return {type: types.UPDATE_TRIP_SUCCESS, trip}
}

export function createTripSuccess(trip) {
    return {type: types.CREATE_TRIP_SUCCESS, trip}
}

export function deleteTripSuccess(trip) {
    return {type: types.DELETE_TRIP_SUCCESS, trip}
}

export function loadTrips() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        return tripApi.getAllTrips().then(trips => {
            console.log('dispatching: '+JSON.stringify(trips));
            dispatch(loadTripsSuccess(trips));
        }).catch(error => {
            throw(error);
        });
    };
}

export function updateTrip(trip) {
    return function (dispatch) {
        return tripApi.updateTrip(trip).then(responseTrip => {
            dispatch(updateTripSuccess(responseTrip));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createTrip(trip) {
    return function (dispatch) {
        return tripApi.createTrip(trip).then(responseTrip => {
            dispatch(createTripSuccess(responseTrip));
            return responseTrip;
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteTrip(trip) {
    return function(dispatch) {
        return tripApi.deleteTrip(trip).then(() => {
            console.log(`Deleted ${trip.id}`);
            dispatch(deleteTripSuccess(trip));

        }).catch(error => {
            throw(error);
        })
    }
}




//
//
//     loadTripsSuccess: (trips) => {
//         return {type: types.LOAD_TRIPS_SUCCESS, trips};
//     },
//
//     loadTrips: () => {
//         return function(dispatch) {
//             return TripsAPI.getAllTrips().then(trips => {
//                 dispatch(loadTripsSuccess(trips));
//             }).catch(error => {
//                 throw(error);
//             });
//         };
// // recieveTrips: () => {
//         // TripsAPI
//         //   .getTrips(api_url+'api/Trips')
//         //   .then(Trips => {
//         //     AppDispatcher.dispatch({
//         //       actionType: TripConstants.RECIEVE_TRIPS,
//         //       Trips: Trips
//         //     });
//         //   })
//         //   .catch(message => {
//         //     AppDispatcher.dispatch({
//         //       actionType: TripConstants.RECIEVE_TRIPS_ERROR,
//         //       message: message
//         //     });
//         //   });
//     },
//
//
//     getTrip: (id) => {
//         TripsAPI
//             .getTrip(api_url+'api/Trips/' + id)
//             .then(trip => {
//                 AppDispatcher.dispatch({
//                     actionType: TripConstants.RECIEVE_TRIP,
//                     trip: trip
//                 });
//             })
//             .catch(message => {
//                 AppDispatcher.dispatch({
//                     actionType: TripConstants.RECIEVE_TRIP_ERROR,
//                     message: message
//                 });
//             });
//     }
//
// }
