import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function tripReducer(state = initialState.trips, action) {
    // state variable here reps just an array of courses
    switch (action.type) {
        case types.LOAD_TRIPS_SUCCESS:
            // return action.trips;
            // return action.trips.map(trip => Object.assign({}, trip, Object.assign([], trip.hobby_ids)))
            return Object.assign([], state, action.trips);
        case types.CREATE_TRIP_SUCCESS:
            this.props.history.push(`/trips/${action.trip.id}`);
            return [
                ...state.filter(trip => trip.id !== action.trip.id),
                Object.assign({}, action.trip)
            ];
        case types.UPDATE_TRIP_SUCCESS:
            return [
                ...state.filter(trip => trip.id !== action.trip.id),
                Object.assign({}, action.trip)
            ];
        case types.DELETE_TRIP_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfTripToDelete = state.findIndex(trip => {
                return trip.id === action.trip.id
            });
            newState.splice(indexOfTripToDelete, 1);
            this.props.history.push('/trips');
            return newState;
        }
        default:
            return state;
    }
}