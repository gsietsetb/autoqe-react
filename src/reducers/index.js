import {combineReducers} from 'redux';
import trips from './tripReducer';
import users from './userReducer';

const rootReducer = combineReducers({
    // short hand property names
    trips,
    users
});

export default rootReducer;