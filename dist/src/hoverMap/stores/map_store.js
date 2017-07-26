'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;

var _map_actions_types = require('../consts/map_actions_types.js');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING = 5;

function ptInSect(x, a, b) {
  return (x - a) * (x - b) <= 0;
}

function ptInRect(pt, rect) {
  return ptInSect(pt.get('lat'), rect.get(0), rect.get(2)) && ptInSect(pt.get('lng'), rect.get(1), rect.get(3));
}

// use rbush https://github.com/mourner/rbush if you have really big amount of points
function calcFilteredAndSortedMarkers(data, mapInfo) {
  var marginBounds = mapInfo && mapInfo.get('marginBounds');

  if (!data || !marginBounds) {
    return new _immutable.List();
  }

  return data.filter(function (m) {
    return ptInRect(m, marginBounds);
  });
}

function defaultMapState() {
  return _immutable2.default.fromJS({
    data: [],
    dataFiltered: [],

    mapInfo: {
      center: [59.938043, 30.337157],
      // set for server rendering for popular screen res
      bounds: [60.325132160343145, 29.13415407031249, 59.546382183279206, 31.54015992968749],
      marginBounds: [60.2843135300829, 29.21655153124999, 59.58811868963835, 31.45776246874999],
      zoom: 9
    },

    openBalloonIndex: -1,

    hoverMarkerIndex: -1,

    tableRowsInfo: {
      hoveredRowIndex: -1,
      visibleRowFirst: 0,
      visibleRowLast: K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING,
      maxVisibleRows: K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING
    }
  });
}

function map() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMapState();
  var _ref = arguments[1];

  var exampleActionType = _ref.type,
      data = _objectWithoutProperties(_ref, ['type']);

  switch (exampleActionType) {
    case _map_actions_types.QUERY_MAP:
      var markersData = data.markersData;

      return state.set('data', markersData).update(function (s) {
        return s.set('dataFiltered', calcFilteredAndSortedMarkers(s.get('data'), s.get('mapInfo')));
      });

    case _map_actions_types.CHANGE_BOUNDS_MAP:
      var center = data.center,
          zoom = data.zoom,
          bounds = data.bounds,
          marginBounds = data.marginBounds;

      return state.update('mapInfo', function (mapInfo) {
        return mapInfo.merge({ center: center, zoom: zoom, bounds: bounds, marginBounds: marginBounds });
      }).set('openBalloonIndex', -1).update(function (s) {
        return s.set('dataFiltered', calcFilteredAndSortedMarkers(s.get('data'), s.get('mapInfo')));
      });

    case _map_actions_types.TABLE_VISIBLE_ROWS_CHANGE_MAP:
      var visibleRowFirst = data.visibleRowFirst,
          visibleRowLast = data.visibleRowLast,
          maxVisibleRows = data.maxVisibleRows;

      return state.update('tableRowsInfo', function (tableRowsInfo) {
        return tableRowsInfo.merge({ visibleRowFirst: visibleRowFirst, visibleRowLast: visibleRowLast, maxVisibleRows: maxVisibleRows });
      }).set('openBalloonIndex', -1);

    case _map_actions_types.TABLE_HOVERED_ROWS_INDEX_CHANGE_MAP:
      var hoveredRowIndex = data.hoveredRowIndex;

      return state.update('tableRowsInfo', function (tableRowsInfo) {
        return tableRowsInfo.merge({ hoveredRowIndex: hoveredRowIndex });
      });

    case _map_actions_types.MARKER_HOVER_INDEX_CHANGE_MAP:
      var hoverMarkerIndex = data.hoverMarkerIndex;

      return state.set('hoverMarkerIndex', hoverMarkerIndex);

    case _map_actions_types.SHOW_BALLON_MAP:
      var openBalloonIndex = data.openBalloonIndex;

      return state.set('openBalloonIndex', openBalloonIndex === state.get('openBalloonIndex') ? -1 : openBalloonIndex);

    default:
      return state;
  }
}
//# sourceMappingURL=map_store.js.map