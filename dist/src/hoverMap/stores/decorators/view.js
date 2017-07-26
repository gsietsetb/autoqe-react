'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* IT's better not to use this decorator at all, and move all view like methods to pure functions (and just memoize pure function)
                                                                                                                                                                                                                                                                               * -------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                                                                                                                                               * view decorator of class methods,
                                                                                                                                                                                                                                                                               * depends on object state params,
                                                                                                                                                                                                                                                                               * works like view in databases
                                                                                                                                                                                                                                                                               * memoizes 'function call result' until some depending state parameters changed
                                                                                                                                                                                                                                                                               * for example in store you have
                                                                                                                                                                                                                                                                               * state = {param1: immutable.Map({bla bla}), param2: immutable.BlaBla(), ... , paramN }
                                                                                                                                                                                                                                                                               * you can write store method
                                                                                                                                                                                                                                                                               * @view(['param1', 'param2'])
                                                                                                                                                                                                                                                                               * getSomething() {
                                                                                                                                                                                                                                                                               *   big long calculations
                                                                                                                                                                                                                                                                               * }
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * getSomething memoizes cals to getSomething until param1 or param2 changed
                                                                                                                                                                                                                                                                               * without view you need to call something like update_() { 'big long calculations' } on every param1 or param2 in code changes,
                                                                                                                                                                                                                                                                               * you need to create additional state param for 'big long calculations result'
                                                                                                                                                                                                                                                                               */

exports.default = view;

var _shallowEqual = require('react-pure-render-utils/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hashCode_(str) {
  var hash = 0;
  var i = void 0;
  var chr = void 0;
  var len = void 0;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function log2_(val) {
  return Math.log(val) / Math.LN2;
}

function memoize_(stateParams, options, this_) {
  return function (fn) {
    var _Object$assign = Object.assign({ stateHolder: 'state', cacheSizePower: 8, expireMs: 24 * 60 * 60 * 1000, maxItemsPerHash: 4 }, options),
        cacheSizePower = _Object$assign.cacheSizePower,
        expireMs = _Object$assign.expireMs,
        maxItemsPerHash = _Object$assign.maxItemsPerHash,
        cacheSize = _Object$assign.cacheSize,
        stateHolder = _Object$assign.stateHolder;

    var cacheSizePowerCalc = Math.round(cacheSize && cacheSize > 2 ? log2_(cacheSize) : cacheSizePower);

    var cacheSizeCalc = Math.pow(2, cacheSizePowerCalc);
    var cache_ = new Array(cacheSizeCalc);
    var mask_ = cacheSizeCalc - 1;

    var peek = function peek(hash, im) {
      if (hash in cache_) {
        var hashArray = cache_[hash];
        var item = hashArray.find(function (v) {
          return v.im === im;
        });
        if (item !== undefined) {
          var currDt = new Date().getTime();
          if (currDt - item.dt < expireMs) {
            var currentState = stateParams.reduce(function (memo, propName) {
              memo[propName] = this_[stateHolder][propName];
              return memo;
            }, {});

            if ((0, _shallowEqual2.default)(currentState, item.state)) {
              return item;
            }
          }

          var index = hashArray.indexOf(item);
          hashArray.splice(index, 1);
        }
      }
    };

    var put = function put(hash, im, result) {
      if (!(hash in cache_)) cache_[hash] = [];
      var hashArray = cache_[hash];
      var currDt = new Date().getTime();

      var item = peek(hash, im);

      if (item !== undefined) {
        item.dt = currDt;
        item.result = result;
        item.state = stateParams.reduce(function (memo, propName) {
          memo[propName] = this_[stateHolder][propName];
          return memo;
        }, {});
        // пересортировать
        cache_[hash] = hashArray.sortBy(function (v) {
          return v.dt;
        });
      } else {
        item = {
          dt: currDt,
          im: im,
          result: result,
          state: stateParams.reduce(function (memo, propName) {
            memo[propName] = this_[stateHolder][propName];
            return memo;
          }, {})
        };

        if (hashArray.length >= maxItemsPerHash) {
          hashArray.shift(); // убрать самый старый элемент
        }
        hashArray.push(item);
      }
    };

    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var im = JSON.stringify(args);
      var hash = hashCode_(im.toString()) & mask_;

      var item = peek(hash, im);

      if (item !== undefined) {
        // есть в кеше вернем
        return item.result;
      }

      var r = fn.apply(null, args);
      put(hash, im, r);
      return r;
    };
  };
}

function view(stateParams, options) {
  return function (target, key, descriptor) {
    return {
      configurable: true,
      get: function get() {
        var classMethod = typeof descriptor.get !== 'function' ? descriptor.value : descriptor.get.call(this);

        if (typeof classMethod !== 'function') {
          throw new Error('@view decorator can only be applied to methods not: ' + (typeof classMethod === 'undefined' ? 'undefined' : _typeof(classMethod)));
        }

        var classMethodBinded = classMethod.bind(this);
        var viewFn = memoize_(stateParams, options, this)(classMethodBinded); // serialize_(classMethodBinded, options);

        Object.defineProperty(this, key, {
          value: viewFn,
          configurable: true,
          writable: true
        });

        return viewFn;
      }
    };
  };
}
//# sourceMappingURL=view.js.map