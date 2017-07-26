'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPageJsRouter;

var _create_page = require('./create_page.js');

var _create_page2 = _interopRequireDefault(_create_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPageJsRouter(serverPath) {
  var page = (0, _create_page2.default)();

  return {
    gotoRoute: page,

    router: function router(userRoutes, initialRouteDispatch, routeAction) {
      Object.keys(userRoutes).forEach(function (routeName) {
        var routePath = userRoutes[routeName];
        page(routePath, function (routeContext /*, next*/) {
          var routeParams = Object.assign({}, routeContext.params);
          var routeFullPath = routeContext.pathname;
          routeAction({ routeName: routeName, routePath: routePath, routeParams: routeParams, routeFullPath: routeFullPath });
        });
      });

      // (__DEV__ && typeof window !== 'undefined') easier to test server rendering on the client
      if (serverPath === undefined || serverPath === null || __DEV__ && typeof window !== 'undefined') {
        page.start({ dispatch: initialRouteDispatch, click: false });
      } else {
        page.start({ dispatch: false, popstate: false, click: false });
        if (initialRouteDispatch) {
          page(serverPath);
        }
      }
    }
  };
}
//# sourceMappingURL=create_page_js_router.js.map