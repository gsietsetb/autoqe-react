'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadTripsSuccess = loadTripsSuccess;
exports.updateTripSuccess = updateTripSuccess;
exports.createTripSuccess = createTripSuccess;
exports.deleteTripSuccess = deleteTripSuccess;
exports.loadTrips = loadTrips;
exports.updateTrip = updateTrip;
exports.createTrip = createTrip;
exports.deleteTrip = deleteTrip;

var _TripsAPI = require('../api/TripsAPI');

var _TripsAPI2 = _interopRequireDefault(_TripsAPI);

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadTripsSuccess(trips) {
    return { type: types.LOAD_TRIPS_SUCCESS, trips: trips };
}

function updateTripSuccess(trip) {
    return { type: types.UPDATE_TRIP_SUCCESS, trip: trip };
}

function createTripSuccess(trip) {
    return { type: types.CREATE_TRIP_SUCCESS, trip: trip };
}

function deleteTripSuccess(trip) {
    return { type: types.DELETE_TRIP_SUCCESS, trip: trip };
}

function loadTrips() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {
        return _TripsAPI2.default.getAllTrips().then(function (trips) {
            console.log('dispatching: ' + JSON.stringify(trips));
            dispatch(loadTripsSuccess(trips));
        }).catch(function (error) {
            throw error;
        });
    };
}

function updateTrip(trip) {
    return function (dispatch) {
        return _TripsAPI2.default.updateTrip(trip).then(function (responseTrip) {
            dispatch(updateTripSuccess(responseTrip));
        }).catch(function (error) {
            throw error;
        });
    };
}

function createTrip(trip) {
    return function (dispatch) {
        return _TripsAPI2.default.createTrip(trip).then(function (responseTrip) {
            dispatch(createTripSuccess(responseTrip));
            return responseTrip;
        }).catch(function (error) {
            throw error;
        });
    };
}

function deleteTrip(trip) {
    return function (dispatch) {
        return _TripsAPI2.default.deleteTrip(trip).then(function () {
            console.log('Deleted ' + trip.id);
            dispatch(deleteTripSuccess(trip));
        }).catch(function (error) {
            throw error;
        });
    };
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
//# sourceMappingURL=TripActions.js.map