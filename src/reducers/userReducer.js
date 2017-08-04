import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.users, action) {
    // state variable here reps just an array of courses
    switch(action.type) {
        case types.LOAD_USERS_SUCCESS:
            return Object.assign([], state, action.users);
        default:
            return state;
    }
}