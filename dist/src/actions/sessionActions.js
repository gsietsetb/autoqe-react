'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginSuccess = loginSuccess;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import sessionApi from '../api/SessionApi';
// import auth from '../auth/authenticator';


function loginSuccess() {
    return { type: types.LOG_IN_SUCCESS };
}

// export function loginUser(credentials) {
//     return function(dispatch) {
//         return sessionApi.login(credentials).then(response => {
//             debugger
//             sessionStorage.setItem('jwt', response.jwt);
//             dispatch(loginSuccess());
//         }).catch(error => {
//             debugger;
//             throw(error);
//         });
//     };
// }
//
// export function logOutUser() {
//     auth.logOut();
//     return {type: types.LOG_OUT}
// }
//# sourceMappingURL=SessionActions.js.map