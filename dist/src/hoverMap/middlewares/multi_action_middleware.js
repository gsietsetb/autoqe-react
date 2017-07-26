'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = multiActionMiddleware;

var _multi_action_types = require('consts/multi_action_types.js');

var _lodash = require('lodash.isarray');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function multiActionMiddleware(_ref) {
  var wait = _ref.wait;

  return function (next) {
    return function (action) {
      if (action && action.type === _multi_action_types.MULTI_ACTION) {
        if (!(0, _lodash2.default)(action.actions)) {
          throw new Error('action of type MULTI_ACTION must contain actions property of Array type.');
        }

        var actionResults = action.actions.map(function (a) {
          return a(action.params);
        });

        if (wait) {
          return Promise.all(actionResults.map(function (act) {
            return act && act.promise || act;
          })) // support promise middleware interface
          .then(function (resolvedActions) {
            // resolvedActions unused
            return actionResults.map(function (a) {
              return next(a);
            });
          }, function (err) {
            throw new Error(err);
          });
        }

        return actionResults.map(function (a) {
          return next(a);
        });
      }

      return next(action);
    };
  };
}
//# sourceMappingURL=multi_action_middleware.js.map