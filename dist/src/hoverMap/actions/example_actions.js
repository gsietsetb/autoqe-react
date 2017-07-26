'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initExampleInfo = initExampleInfo;

var _example_action_types = require('../consts/example_action_types.js');

// to emulate server async call
function getDataAsync() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return new Promise(function (r) {
    return setTimeout(function () {
      return r(data);
    }, ms);
  });
}

function initExampleInfo(_ref) {
  var title = _ref.title,
      info = _ref.info,
      source = _ref.source,
      next = _ref.next,
      prev = _ref.prev;

  var K_EMUL_ASYNC_TIMEOUT_MS = 100;

  return {
    types: [null, _example_action_types.INIT_EXAMPLE, null],
    promise: getDataAsync(K_EMUL_ASYNC_TIMEOUT_MS, {
      title: title, info: info, source: source, next: next, prev: prev
    }) // .then(r => (console.log('initExampleInfo received', r), r))
  };
}
//# sourceMappingURL=example_actions.js.map