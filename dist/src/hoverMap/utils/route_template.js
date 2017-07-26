'use strict';

var _ = require('underscore');

_.templateSettings = {
  interpolate: /\:([\w_]+)/g
};

module.exports = function (route) {
  return _.template(route);
};
//# sourceMappingURL=route_template.js.map