'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (route, options) {
  var routeTpl = routeTemplate(route);

  return {
    get: function get(obj) {
      return http('get', routeTpl(textUtils.encode_object_properties(obj)), null, options);
    },
    post: function post(obj) {
      return http('post', routeTpl(textUtils.encode_object_properties(obj)), obj, options);
    },
    save: function save(context, obj) {
      return http('post', routeTpl(textUtils.encode_object_properties(context)), obj, options);
    }
  };
};

var routeTemplate = require('utils/route_template.js');
var textUtils = require('utils/text.js');

function http(method, url, object, options) {
  var fetchOptions = void 0;

  var baseOptions = {
    method: method,
    credentials: 'include'
  };

  if (object === null) {
    fetchOptions = Object.assign({}, baseOptions, options);
  } else {
    if (object) {
      // if (object && object.constructor && object.constructor.toString().indexOf('FormData') > -1) {
      if (object instanceof FormData) {
        fetchOptions = Object.assign({ body: object }, baseOptions, options);
      } else {
        fetchOptions = Object.assign({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(object)
        }, baseOptions, options);
      }
    }
  }

  return fetch(url, fetchOptions).then(function (response) {
    return response.json();
  });
}
//# sourceMappingURL=resource.js.map