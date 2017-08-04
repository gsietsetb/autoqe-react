'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.K_NO_ROUTE = exports.K_MAP_ROUTE = exports.K_DEFAULT_ROUTE = undefined;

var _routes_;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// import any action creators you need to call on onRouteChange


exports.changeRoute = changeRoute;

var _index = require('../consts/index.js');

var _index2 = _interopRequireDefault(_index);

var _multi_action_types = require('../consts/multi_action_types.js');

var _example_defs = require('../consts/example_defs.js');

var _example_defs2 = _interopRequireDefault(_example_defs);

var _example_actions = require('./example_actions.js');

var _map_actions = require('./MapActions.js');

var _router_actions = require('./router_actions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// -----------------------------------------------------------------------
// ROUTING TABLE AND CONSTANTS -------------------------------------------
// -----------------------------------------------------------------------
// call multiple action creators on route match
// look at middlewares/multi_action_middleware.js

var K_DEFAULT_ROUTE = exports.K_DEFAULT_ROUTE = _index2.default.K_SERVER_PATH + '/';
var K_MAP_ROUTE = exports.K_MAP_ROUTE = _index2.default.K_SERVER_PATH + '/map/:example/:zoom?';
var K_NO_ROUTE = exports.K_NO_ROUTE = '*';

var routes_ = (_routes_ = {}, _defineProperty(_routes_, K_DEFAULT_ROUTE, [function (arg) {
  return console.log(arg), {};
} // eslint-disable-line no-console
]), _defineProperty(_routes_, K_MAP_ROUTE, [function (_ref) {
  var routeParams = _ref.routeParams;
  return (0, _map_actions.query)({
    count: 1000, seed: 7, test: false, latVarM: 2, lngVarM: 4.5,
    typeGetter: routeParams.example === _example_defs.examples.balderdash ? function (i) {
      return i % 6;
    } : function (i) {
      return i % 2;
    },
    cacheBreaker: routeParams.example === _example_defs.examples.balderdash ? 6 : 2
  });
}, function (_ref2) {
  var routeParams = _ref2.routeParams;
  return (0, _example_actions.initExampleInfo)(_extends({ title: '', info: '', source: '', next: '', prev: '' }, _example_defs2.default[routeParams.example]));
}]), _defineProperty(_routes_, K_NO_ROUTE, [function () {
  return {/*init a big red alert store about route not found*/};
} // eslint-disable-line no-console
]), _routes_);

// onRouteChange calback is just an this action (use any router you like, TODO add @koistya hashchange router)
// params for K_MAP_ROUTE = '/map/:example/:zoom?' and real route `/map/simple` will be
// {routeName: "K_MAP_ROUTE", routePath: "/map/:example/:zoom?",
//  routeParams: {example: "simple", zoom: undefined}, routeFullPath: "/map/simple"}
function changeRoute(_ref3) {
  var routeName = _ref3.routeName,
      routePath = _ref3.routePath,
      routeParams = _ref3.routeParams,
      routeFullPath = _ref3.routeFullPath;

  if (routePath in routes_) {
    return {
      type: _multi_action_types.MULTI_ACTION,
      params: { routeName: routeName, routePath: routePath, routeParams: routeParams, routeFullPath: routeFullPath },
      actions: [].concat(_toConsumableArray(routes_[routePath]), [_router_actions.updateRoute])
    };
  }

  // TODO return updateRoute and add 404
  throw new Error('Unknown route');
}
//# sourceMappingURL=user_routes.js.map