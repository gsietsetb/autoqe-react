'use strict';

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableBufferedRows.react
 * @typechecks
 */

var React = require('./React');
var FixedDataTableRowBuffer = require('./FixedDataTableRowBuffer');
var FixedDataTableRow = require('./FixedDataTableRow.react');

var cx = require('./cx');
var emptyFunction = require('./emptyFunction');
var joinClasses = require('./joinClasses');

var PropTypes = React.PropTypes;

var FixedDataTableBufferedRows = React.createClass({ displayName: "FixedDataTableBufferedRows",

  propTypes: {
    defaultRowHeight: PropTypes.number.isRequired,
    firstRowIndex: PropTypes.number.isRequired,
    firstRowOffset: PropTypes.number.isRequired,
    fixedColumns: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    offsetTop: PropTypes.number.isRequired,
    onRowClick: PropTypes.func,
    onRowMouseDown: PropTypes.func,
    onRowMouseEnter: PropTypes.func,
    rowClassNameGetter: PropTypes.func,
    rowsCount: PropTypes.number.isRequired,
    rowGetter: PropTypes.func.isRequired,
    rowHeightGetter: PropTypes.func,
    scrollLeft: PropTypes.number.isRequired,
    scrollableColumns: PropTypes.array.isRequired,
    showLastRowBorder: PropTypes.bool,
    width: PropTypes.number.isRequired
  },

  getInitialState: function getInitialState() /*object*/{
    this._rowBuffer = new FixedDataTableRowBuffer(this.props.rowsCount, this.props.defaultRowHeight, this.props.height, this._getRowHeight);
    return {
      rowsToRender: this._rowBuffer.getRows(this.props.firstRowIndex, this.props.firstRowOffset)
    };
  },

  componentWillMount: function componentWillMount() {
    this._staticRowArray = [];
  },

  componentDidMount: function componentDidMount() {
    this._bufferUpdateTimer = setTimeout(this._updateBuffer, 500);
  },

  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
    if (nextProps.rowsCount !== this.props.rowsCount || nextProps.defaultRowHeight !== this.props.defaultRowHeight || nextProps.height !== this.props.height) {
      this._rowBuffer = new FixedDataTableRowBuffer(nextProps.rowsCount, nextProps.defaultRowHeight, nextProps.height, this._getRowHeight);
    }
    this.setState({
      rowsToRender: this._rowBuffer.getRows(nextProps.firstRowIndex, nextProps.firstRowOffset)
    });
    if (this._bufferUpdateTimer) {
      clearTimeout(this._bufferUpdateTimer);
    }
    this._bufferUpdateTimer = setTimeout(this._updateBuffer, 400);
  },

  _updateBuffer: function _updateBuffer() {
    this._bufferUpdateTimer = null;
    if (this.isMounted()) {
      this.setState({
        rowsToRender: this._rowBuffer.getRowsWithUpdatedBuffer()
      });
    }
  },

  shouldComponentUpdate: function shouldComponentUpdate() /*boolean*/{
    // Don't add PureRenderMixin to this component please.
    return true;
  },

  componentWillUnmount: function componentWillUnmount() {
    this._staticRowArray.length = 0;
  },

  render: function render() /*object*/{
    var props = this.props;
    var offsetTop = props.offsetTop;
    var rowClassNameGetter = props.rowClassNameGetter || emptyFunction;
    var rowGetter = props.rowGetter;

    var rowsToRender = this.state.rowsToRender;
    this._staticRowArray.length = rowsToRender.length;

    for (var i = 0; i < rowsToRender.length; ++i) {
      var rowInfo = rowsToRender[i];
      var rowIndex = rowInfo.rowIndex;
      var rowOffsetTop = rowInfo.offsetTop;
      var currentRowHeight = this._getRowHeight(rowIndex);

      var hasBottomBorder = rowIndex === props.rowsCount - 1 && props.showLastRowBorder;

      this._staticRowArray[i] = React.createElement(FixedDataTableRow, {
        key: i,
        index: rowIndex,
        data: rowGetter(rowIndex),
        width: props.width,
        height: currentRowHeight,
        scrollLeft: Math.round(props.scrollLeft),
        offsetTop: Math.round(offsetTop + rowOffsetTop),
        fixedColumns: props.fixedColumns,
        scrollableColumns: props.scrollableColumns,
        onClick: props.onRowClick,
        onMouseDown: props.onRowMouseDown,
        onMouseEnter: props.onRowMouseEnter,
        className: joinClasses(rowClassNameGetter(rowIndex), cx('public/fixedDataTable/bodyRow'), hasBottomBorder ? cx('fixedDataTable/hasBottomBorder') : null) });
    }

    return React.createElement("div", null, this._staticRowArray);
  },

  _getRowHeight: function _getRowHeight( /*number*/index) /*number*/{
    return this.props.rowHeightGetter ? this.props.rowHeightGetter(index) : this.props.defaultRowHeight;
  }
});

module.exports = FixedDataTableBufferedRows;
//# sourceMappingURL=FixedDataTableBufferedRows.react.js.map