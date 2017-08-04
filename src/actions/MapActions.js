import {memoize, serialize} from 'async-decorators';

import {
    CHANGE_BOUNDS_MAP,
    MARKER_HOVER_INDEX_CHANGE_MAP,
    QUERY_MAP,
    SHOW_BALLON_MAP,
    TABLE_HOVERED_ROWS_INDEX_CHANGE_MAP,
    TABLE_VISIBLE_ROWS_CHANGE_MAP
} from '../constants/map_actions_types.js';

import genMarkersData from '../hoverMap/components/examples/data/gen_markers_data.js';

// to emulate server async call
const getDataAsync = (ms = 0, data = null) => new Promise(r => setTimeout(() => r(data), ms));

const K_EMUL_ROUNDTRIP_TIME_MS = 130;
const K_ROW_DEBOUNCE_INTERVAL = 16; // increase if you wanna show really big amount of markers

const asyncActions = {
  @serialize({raiseSkipError: false}) // possible memory leak, check
  @memoize({expireMs: 1000 * 60 * 15})
  async query(params) {
    return await getDataAsync(K_EMUL_ROUNDTRIP_TIME_MS, genMarkersData(params));
  },

  @serialize({raiseSkipError: false}) // skips all but first and last
  async tableVisibleRowsChange({visibleRowFirst, visibleRowLast, maxVisibleRows}) {
    return await getDataAsync(K_ROW_DEBOUNCE_INTERVAL, {visibleRowFirst, visibleRowLast, maxVisibleRows});
  }
};

export function query(params) {
  return {
    types: [null, QUERY_MAP, null],
    promise:
      asyncActions
        .query(params)
        .then(data => ({markersData: data}))
  };
}

export function changeBounds({center, zoom, bounds, marginBounds}) {
  return {type: CHANGE_BOUNDS_MAP,
    center, zoom, bounds, marginBounds};
}

export function tableVisibleRowsChange(params) {
  return {
    types: [null, TABLE_VISIBLE_ROWS_CHANGE_MAP, null],
    promise: asyncActions.tableVisibleRowsChange(params)
  };
}

export function tableHoveredRowIndexChange(hoveredRowIndex) {
  return {
    type: TABLE_HOVERED_ROWS_INDEX_CHANGE_MAP,
    hoveredRowIndex
  };
}

export function markerHoverIndexChange(hoverMarkerIndex) {
  return {
    type: MARKER_HOVER_INDEX_CHANGE_MAP,
    hoverMarkerIndex
  };
}

export function showBallon(openBalloonIndex) {
  return {
    type: SHOW_BALLON_MAP,
    openBalloonIndex
  };
}
