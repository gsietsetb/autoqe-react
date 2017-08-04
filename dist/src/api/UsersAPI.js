'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _client = require('superagent/lib/client');

var _client2 = _interopRequireDefault(_client);

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_URL = types.API_URL + 'api/trips/';

var UserApi = function () {
    function UserApi() {
        _classCallCheck(this, UserApi);
    }

    _createClass(UserApi, null, [{
        key: 'getAllUsers',
        value: function getAllUsers() {
            return new Promise(function (resolve, reject) {
                _client2.default.get(API_URL).end(function (err, resp) {
                    if (err) reject(err);
                    resolve(JSON.parse(resp.text));
                });
            });
            // return fetch(API_URL).then(response => {
            //     return response.json()
            // }).catch(error => {
            //     return error
            // });
        }
    }]);

    return UserApi;
}();
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


exports.default = UserApi;
//# sourceMappingURL=UsersAPI.js.map