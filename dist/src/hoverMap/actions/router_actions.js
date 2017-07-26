'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRoute = updateRoute;

var _router_action_types = require('../consts/router_action_types.js');

// this action updates router_store
function updateRoute(_ref) {
  var routeName = _ref.routeName,
      routePath = _ref.routePath,
      routeParams = _ref.routeParams,
      routeFullPath = _ref.routeFullPath;

  return {
    type: _router_action_types.DEFAULT_ROUTE,
    routeName: routeName, routePath: routePath, routeParams: routeParams, routeFullPath: routeFullPath
  };
}
//# sourceMappingURL=router_actions.js.map