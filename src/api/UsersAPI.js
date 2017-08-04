import request from 'superagent/lib/client';
import * as types from '../actions/actionTypes';

const API_URL = types.API_URL+'api/trips/';

export default class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            request
                .get(API_URL)
                .end((err, resp) => {
                    if (err) reject(err);
                    resolve(JSON.parse(resp.text));
                })
        });
        // return fetch(API_URL).then(response => {
        //     return response.json()
        // }).catch(error => {
        //     return error
        // });
    }
}
// We want to get a list of all the Users
// from the API. This list contains reduced info
// and will be be used in the sidebar


//     getContacts: (url) => {
//         return new Promise((resolve, reject) => {
//             request
//                 .get(url)
//                 .end((err, response) => {
//                     if (err) reject(err);
//                     resolve(JSON.parse(response.text));
//                 })
//         });
//     },
//
//     getContact: (url) => {
//         return new Promise((resolve, reject) => {
//             request
//                 .get(url)
//                 .set('Authorization', 'Bearer ' + AuthStore.getJwt())
//                 .end((err, response) => {
//                     if (err) reject(err);
//                     resolve(JSON.parse(response.text));
//                 })
//         });
//     }
// }