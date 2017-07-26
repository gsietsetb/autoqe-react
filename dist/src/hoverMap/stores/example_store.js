'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = example;

var _example_action_types = require('consts/example_action_types.js');

var _immutable = require('immutable');

function defaultExampleState() {
  return new _immutable.Map({ title: '', info: '', source: '', next: '', prev: '' });
}

function example() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultExampleState();
  var _ref = arguments[1];
  var exampleActionType = _ref.type,
      title = _ref.title,
      info = _ref.info,
      source = _ref.source,
      next = _ref.next,
      prev = _ref.prev;

  switch (exampleActionType) {
    case _example_action_types.INIT_EXAMPLE:
      return state.merge({ title: title, info: info, source: source, next: next, prev: prev });
    default:
      return state;
  }
}
//# sourceMappingURL=example_store.js.map