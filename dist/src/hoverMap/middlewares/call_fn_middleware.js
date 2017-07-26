"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callFnMiddleware;
function callFnMiddleware(callFn) {
  return function (next) {
    return function (action) {
      return callFn(action), next(action);
    };
  };
}
//# sourceMappingURL=call_fn_middleware.js.map