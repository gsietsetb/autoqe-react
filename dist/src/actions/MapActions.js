'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _desc, _value, _obj;

exports.query = query;
exports.changeBounds = changeBounds;
exports.tableVisibleRowsChange = tableVisibleRowsChange;
exports.tableHoveredRowIndexChange = tableHoveredRowIndexChange;
exports.markerHoverIndexChange = markerHoverIndexChange;
exports.showBallon = showBallon;

var _asyncDecorators = require('async-decorators');

var _map_actions_types = require('../constants/map_actions_types.js');

var _gen_markers_data = require('../hoverMap/components/examples/data/gen_markers_data.js');

var _gen_markers_data2 = _interopRequireDefault(_gen_markers_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

// to emulate server async call
var getDataAsync = function getDataAsync() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return new Promise(function (r) {
    return setTimeout(function () {
      return r(data);
    }, ms);
  });
};

var K_EMUL_ROUNDTRIP_TIME_MS = 130;
var K_ROW_DEBOUNCE_INTERVAL = 16; // increase if you wanna show really big amount of markers

var asyncActions = (_dec = (0, _asyncDecorators.serialize)({ raiseSkipError: false }), _dec2 = (0, _asyncDecorators.memoize)({ expireMs: 1000 * 60 * 15 }), _dec3 = (0, _asyncDecorators.serialize)({ raiseSkipError: false }), (_obj = {
  query: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(params) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getDataAsync(K_EMUL_ROUNDTRIP_TIME_MS, (0, _gen_markers_data2.default)(params));

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function query(_x3) {
      return _ref.apply(this, arguments);
    }

    return query;
  }(),
  // skips all but first and last
  tableVisibleRowsChange: function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_ref2) {
      var visibleRowFirst = _ref2.visibleRowFirst,
          visibleRowLast = _ref2.visibleRowLast,
          maxVisibleRows = _ref2.maxVisibleRows;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getDataAsync(K_ROW_DEBOUNCE_INTERVAL, { visibleRowFirst: visibleRowFirst, visibleRowLast: visibleRowLast, maxVisibleRows: maxVisibleRows });

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function tableVisibleRowsChange(_x4) {
      return _ref3.apply(this, arguments);
    }

    return tableVisibleRowsChange;
  }()
}, (_applyDecoratedDescriptor(_obj, 'query', [_dec, _dec2], Object.getOwnPropertyDescriptor(_obj, 'query'), _obj), _applyDecoratedDescriptor(_obj, 'tableVisibleRowsChange', [_dec3], Object.getOwnPropertyDescriptor(_obj, 'tableVisibleRowsChange'), _obj)), _obj));

function query(params) {
  return {
    types: [null, _map_actions_types.QUERY_MAP, null],
    promise: asyncActions.query(params).then(function (data) {
      return { markersData: data };
    })
  };
}

function changeBounds(_ref4) {
  var center = _ref4.center,
      zoom = _ref4.zoom,
      bounds = _ref4.bounds,
      marginBounds = _ref4.marginBounds;

  return { type: _map_actions_types.CHANGE_BOUNDS_MAP,
    center: center, zoom: zoom, bounds: bounds, marginBounds: marginBounds };
}

function tableVisibleRowsChange(params) {
  return {
    types: [null, _map_actions_types.TABLE_VISIBLE_ROWS_CHANGE_MAP, null],
    promise: asyncActions.tableVisibleRowsChange(params)
  };
}

function tableHoveredRowIndexChange(hoveredRowIndex) {
  return {
    type: _map_actions_types.TABLE_HOVERED_ROWS_INDEX_CHANGE_MAP,
    hoveredRowIndex: hoveredRowIndex
  };
}

function markerHoverIndexChange(hoverMarkerIndex) {
  return {
    type: _map_actions_types.MARKER_HOVER_INDEX_CHANGE_MAP,
    hoverMarkerIndex: hoverMarkerIndex
  };
}

function showBallon(openBalloonIndex) {
  return {
    type: _map_actions_types.SHOW_BALLON_MAP,
    openBalloonIndex: openBalloonIndex
  };
}
//# sourceMappingURL=MapActions.js.map