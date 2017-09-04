import request from 'superagent/lib/client';
import * as types from '../actions/actionTypes';

const API_URL = types.API_URL+'api/trips/';

export default class TripsAPI {

    static requestHeaders() {
        // return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    }

    static getAllTrips() {
        // const headers = this.requestHeaders();
        // console.log(API_URL);
        // const request = new Request(API_URL, {
        //     method: 'GET',
        //     // headers: headers
        // });
        // console.log(" This is the: "+API_URL+trip.id);
        return new Promise((resolve, reject) => {
            request
                .get(API_URL)
                .end((err, resp) => {
                    if (err) reject(err);
                    resolve(JSON.parse(resp.text));
                })
        });

        // return fetch(request).then(response => {
        //     return response.json();
        // }).catch(error => {
        //     return error;
        // });
    }

    static updateTrip(trip) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        console.log(" This is the: "+API_URL+trip.id);
        const request = new Request(API_URL+trip.id, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({trip: trip})
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createTrip(trip) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({trip: trip})
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteTrip(trip) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(API_URL+trip.id, {
            method: 'DELETE',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
//
// export default {
//
//   // We want to get a list of all the Trips
//   // from the API. This list contains reduced info
//   // and will be be used in the sidebar
//   getTrips: (url) => {
//     return new Promise((resolve, reject) => {
//       request
//         .get(url)
//         .end((err, resp) => {
//           if (err) reject(err);
//           resolve(JSON.parse(resp.text));
//         })
//     });
//   },
//
//   getTrip: (url) => {
//     return new Promise((resolve, reject) => {
//       request
//         .get(url)
//         // .set('Authorization', 'Bearer ' + AuthStore.getJwt())
//         .end((err, resp) => {
//           if (err) reject(err);
//           resolve(JSON.parse(resp.text));
//         })
//     });
//   }
// }