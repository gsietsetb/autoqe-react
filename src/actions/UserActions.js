import userApi from '../api/UsersAPI';
import * as types from './actionTypes';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}
export function loadUsers() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        return userApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
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
