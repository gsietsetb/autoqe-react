'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initRedux;

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isstring');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isfunction');

var _lodash6 = _interopRequireDefault(_lodash5);

var _redux = require('redux');

var _thunk = require('redux/lib/middleware/thunk');

var _thunk2 = _interopRequireDefault(_thunk);

var _multi_action_middleware = require('middlewares/multi_action_middleware.js');

var _multi_action_middleware2 = _interopRequireDefault(_multi_action_middleware);

var _call_fn_middleware = require('middlewares/call_fn_middleware.js');

var _call_fn_middleware2 = _interopRequireDefault(_call_fn_middleware);

var _promise_middleware = require('middlewares/promise_middleware');

var _promise_middleware2 = _interopRequireDefault(_promise_middleware);

var _create_page_js_router = require('utils/pagejs/create_page_js_router.js');

var _create_page_js_router2 = _interopRequireDefault(_create_page_js_router);

var _link_action_types = require('consts/link_action_types.js');

var _index = require('stores/index');

var stores = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.composeStores)(stores);

function initRedux(_ref) {
  var initialState = _ref.initialState,
      serverPath = _ref.serverPath,
      userRoutesActions = _ref.userRoutesActions;

  return new Promise(function (resolve, reject) {
    var _createPageJsRouter = (0, _create_page_js_router2.default)(serverPath),
        gotoRoute = _createPageJsRouter.gotoRoute,
        router = _createPageJsRouter.router;

    var isServerCall = serverPath !== undefined && serverPath !== null;
    var routePathes = (0, _lodash2.default)(userRoutesActions, _lodash4.default);
    var initialRouteDispatch = !initialState || isServerCall; // call or not initial route

    // Create a Dispatcher function for your composite Store:
    var dispatcher = (0, _redux.createDispatcher)(store, function (getState) {
      return [(0, _thunk2.default)(getState), (0, _multi_action_middleware2.default)({ wait: isServerCall }), // wait multiple actions to complete or not
      (0, _promise_middleware2.default)(), (0, _call_fn_middleware2.default)(function (action) {
        return action && action.type === _link_action_types.SWITCH_LINK && gotoRoute(action.url);
      }) // helper for <Link /> component
      ];
    });

    var redux = (0, _redux.createRedux)(dispatcher, initialState);

    // bind route changes on changeRoute action
    router(routePathes, initialRouteDispatch, function () {
      var dispatchResult = redux.dispatch(userRoutesActions.changeRoute.apply(userRoutesActions, arguments));
      // resolve on server after all actions in userRoutesActions.changeRoute resolved
      if (isServerCall) {
        if (!dispatchResult || !(0, _lodash6.default)(dispatchResult.then)) {
          reject(new Error('dispatchResult must be promise on server'));
        }

        if (dispatchResult && (0, _lodash6.default)(dispatchResult.then)) {
          dispatchResult.then(function () {
            return resolve(redux);
          }, // result is'n needed it's just to be sure all actions done
          function (err) {
            return reject(err);
          });
        }
      }
    });

    if (!isServerCall) {
      resolve(redux);
    }
  });
}
//# sourceMappingURL=init_redux.js.map