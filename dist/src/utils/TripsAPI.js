'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AuthStore = require('../store/AuthStore');

var _AuthStore2 = _interopRequireDefault(_AuthStore);

var _client = require('superagent/lib/client');

var _client2 = _interopRequireDefault(_client);

var _ActionTypes = require('../actions/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_URL = types.API_URL + 'api/trips/';

var TripsAPI = function () {
    function TripsAPI() {
        _classCallCheck(this, TripsAPI);
    }

    _createClass(TripsAPI, null, [{
        key: 'requestHeaders',
        value: function requestHeaders() {
            // return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
        }
    }, {
        key: 'getAllTrips',
        value: function getAllTrips() {
            // const headers = this.requestHeaders();
            console.log(API_URL);
            var request = new Request(API_URL, {
                method: 'GET'
                // headers: headers
            });

            return fetch(request).then(function (response) {
                return response.json();
            }).catch(function (error) {
                return error;
            });
        }
    }, {
        key: 'updateTrip',
        value: function updateTrip(trip) {
            var headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
            var request = new Request(API_URL + trip.id, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify({ trip: trip })
            });

            return fetch(request).then(function (response) {
                return response.json();
            }).catch(function (error) {
                return error;
            });
        }
    }, {
        key: 'createTrip',
        value: function createTrip(trip) {
            var headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
            var request = new Request(API_URL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ trip: trip })
            });

            return fetch(request).then(function (response) {
                return response.json();
            }).catch(function (error) {
                return error;
            });
        }
    }, {
        key: 'deleteTrip',
        value: function deleteTrip(trip) {
            var headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
            var request = new Request(API_URL + trip.id, {
                method: 'DELETE',
                headers: headers
            });

            return fetch(request).then(function (response) {
                return response.json();
            }).catch(function (error) {
                return error;
            });
        }
    }]);

    return TripsAPI;
}();
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


exports.default = TripsAPI;
//# sourceMappingURL=TripsAPI.js.map