'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = serialize;
exports.deserialize = deserialize;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isImmutable(x) {
  if (x && x.hashCode && typeof x.hashCode === 'function' && x.equals && typeof x.equals === 'function') {
    return true;
  }
  return false;
}

function serialize(state) {
  var res = {};
  for (var key in state) {
    if (!state.hasOwnProperty(key)) continue;
    var obj = state[key];
    if (isImmutable(obj)) {
      res[key] = {
        __immutable__: true,
        value: obj.toJSON()
      };
    } else {
      res[key] = obj;
    }
  }

  return JSON.stringify(res);
}

function deserialize(val) {
  var dObj = JSON.parse(val);
  var state = {};
  for (var key in dObj) {
    if (!dObj.hasOwnProperty(key)) continue;
    var obj = dObj[key];
    if (obj && obj.__immutable__ === true) {
      state[key] = _immutable2.default.fromJS(obj.value);
    } else {
      state[key] = obj;
    }
  }

  return state;
}
//# sourceMappingURL=serialize.js.map