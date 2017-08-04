'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadUsersSuccess = loadUsersSuccess;
exports.loadUsers = loadUsers;

var _UsersAPI = require('../api/UsersAPI');

var _UsersAPI2 = _interopRequireDefault(_UsersAPI);

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadUsersSuccess(users) {
    return { type: types.LOAD_USERS_SUCCESS, users: users };
}
function loadUsers() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {
        return _UsersAPI2.default.getAllUsers().then(function (users) {
            dispatch(loadUsersSuccess(users));
        }).catch(function (error) {
            throw error;
        });
    };
}

// const api_url = 'https://api.autoqe.com/';
// // const api_url = 'http://localhost:3001/';
//
// export default {
//
//   recieveContacts: () => {
//     ContactsAPI
//       .getContacts(api_url+'api/Users')
//       .then(contacts => {
//         AppDispatcher.dispatch({
//           actionType: ContactConstants.RECIEVE_USERS,
//           contacts: contacts
//         });
//       })
//       .catch(message => {
//         AppDispatcher.dispatch({
//           actionType: ContactConstants.RECIEVE_USERS_ERROR,
//           message: message
//         });
//       });
//   },
//
//   getContact: (id) => {
//     ContactsAPI
//       .getContact(api_url+'api/Users/' + id)
//       .then(contact => {
//         AppDispatcher.dispatch({
//           actionType: ContactConstants.RECIEVE_USER,
//           contact: contact
//         });
//       })
//       .catch(message => {
//         AppDispatcher.dispatch({
//           actionType: ContactConstants.RECIEVE_USER_ERROR,
//           message: message
//         });
//       });
//   }
//
// }
//# sourceMappingURL=UserActions.js.map