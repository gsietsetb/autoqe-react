'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = router;

var _router_action_types = require('consts/router_action_types');

var _immutable = require('immutable');

function defaultRouterState() {
  return new _immutable.Map({
    routeName: '',
    routePath: '',
    routeFullPath: '',
    routeParams: {}
  });
}

// TODO remove constants like as here https://gist.github.com/skevy/8a4ffc3cfdaf5fd68739
// but wait for some ready library or think myself
function router() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRouterState();
  var _ref = arguments[1];
  var routerActionType = _ref.type,
      routeName = _ref.routeName,
      routePath = _ref.routePath,
      routeParams = _ref.routeParams,
      routeFullPath = _ref.routeFullPath;

  switch (routerActionType) {
    case _router_action_types.DEFAULT_ROUTE:
      // no need for immutable and no need for merge, just for fun
      return state.merge({ routeName: routeName, routePath: routePath, routeParams: routeParams, routeFullPath: routeFullPath });
    default:
      return state;
  }
}
//# sourceMappingURL=router_store.js.map