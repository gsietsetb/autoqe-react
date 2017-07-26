'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.columns = exports.K_MINI_HEADER_HEIGHT = exports.K_HEADER_HEIGHT = exports.K_ROW_HEIGHT = undefined;
exports.renderHeader = renderHeader;
exports.renderMiniHeader = renderMiniHeader;
exports.getRowClassNameAt = getRowClassNameAt;
exports.cellRenderer = cellRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var K_ROW_HEIGHT = 105;
var K_HEADER_HEIGHT = 165;
var K_MINI_HEADER_HEIGHT = 40;

exports.K_ROW_HEIGHT = K_ROW_HEIGHT;
exports.K_HEADER_HEIGHT = K_HEADER_HEIGHT;
exports.K_MINI_HEADER_HEIGHT = K_MINI_HEADER_HEIGHT;


var K_STYLE_IMAGE = {
    width: K_ROW_HEIGHT * 4 / 3,
    height: K_ROW_HEIGHT,
    borderLeft: '1px solid white'
};

var K_KEY_COLUMN_RANK = 'K_KEY_COLUMN_RANK';
var K_KEY_COLUMN_DESCRIPTION = 'K_KEY_COLUMN_DESCRIPTION';
var K_KEY_COLUMN_PHONE = 'K_KEY_COLUMN_PHONE';

var K_ROW_CLASS_NAME_BORDER_LINE = 'ice-table ice-table--line';
var K_ROW_CLASS_NAME_EVEN = 'ice-table ice-table--row-even';
var K_ROW_CLASS_NAME_ODD = 'ice-table ice-table--row-odd';

var K_ROW_CLASS_NAME_EVEN_HOVERED = 'ice-table ice-table--row-even ice-table--row-hovered';
var K_ROW_CLASS_NAME_ODD_HOVERED = 'ice-table ice-table--row-odd ice-table--row-hovered';

var K_SHOW_FILTERS_TEXT = 'Show filters';

// DATA DEFINITION
var columns = [{
    dataKey: K_KEY_COLUMN_RANK,
    fixed: false,
    flexGrow: 1,
    label: '',
    width: 105
}, {
    dataKey: K_KEY_COLUMN_DESCRIPTION,
    // bugs in fixed-data-table flex realization use fixed size to precise calculus
    flexGrow: 9999999999,
    fixed: false,
    label: '',
    width: 100
}, {
    dataKey: K_KEY_COLUMN_PHONE,
    flexGrow: 1,
    fixed: false,
    label: '',
    width: 140
}];

exports.columns = columns;
function renderHeader(resetFn) {
    return _react2.default.createElement(
        'div',
        { className: 'ice-table-header' },
        _react2.default.createElement(
            'div',
            { className: 'ice-table-header__filter-line-header' },
            'BEST FILTERS EVER (empty)'
        ),
        _react2.default.createElement(
            'div',
            { className: 'ice-table-header__filter-line' },
            _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'ice-table-header__filter-line' },
            _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'ice-table-header__filter-line' },
            _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'ice-table-header__filter-line' },
            _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'ice-table-header__show-filters' },
            _react2.default.createElement(
                'a',
                {
                    className: 'ice-table-header__show-filters-href ice-table-header__show-filters-href--disabled',
                    onClick: resetFn },
                K_SHOW_FILTERS_TEXT
            )
        )
    );
}

function renderMiniHeader(resetFn) {
    return _react2.default.createElement(
        'div',
        { className: 'ice-table-header' },
        _react2.default.createElement(
            'div',
            { className: 'ice-table-header__show-filters' },
            _react2.default.createElement(
                'a',
                {
                    className: 'ice-table-header__show-filters-href',
                    onClick: resetFn },
                K_SHOW_FILTERS_TEXT
            )
        )
    );
}

function renderColumn0(cellDataKey, rowData /*, rowIndex*/) {
    return _react2.default.createElement(
        'div',
        { className: 'ice-table__column0' },
        _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('ice-table__column0-number', 'ice-table__column0-number__color' + rowData.get('type')) },
            rowData.get('number')
        )
    );
}

function renderColumn1(cellDataKey, rowData /*, rowIndex*/) {
    return _react2.default.createElement(
        'div',
        { className: 'ice-table__column1' },
        _react2.default.createElement(
            'div',
            { className: 'ice-table__column1-title' },
            rowData.get('title')
        ),
        _react2.default.createElement(
            'div',
            { className: 'ice-table__column1-address' },
            rowData.get('address')
        )
    );
}

function renderColumn2(cellDataKey, rowData /*, rowIndex*/) {
    // image load hack (just put in array with key eq to src (c) istarkov :-))
    return _react2.default.createElement(
        'div',
        { className: 'ice-table__column2' },
        [_react2.default.createElement('img', { key: rowData.get('image'), src: rowData.get('image'), style: K_STYLE_IMAGE })]
    );
}

function getRowClassNameAt(i, isHovered, isFirstInvisibleRow) {
    var borderTopClass = isFirstInvisibleRow ? K_ROW_CLASS_NAME_BORDER_LINE : '';

    if (isHovered) {
        return borderTopClass + ' ' + (i % 2 === 0 ? K_ROW_CLASS_NAME_EVEN_HOVERED : K_ROW_CLASS_NAME_ODD_HOVERED);
    }

    return borderTopClass + ' ' + (i % 2 === 0 ? K_ROW_CLASS_NAME_EVEN : K_ROW_CLASS_NAME_ODD);
}

function cellRenderer(cellDataKey, rowData, rowIndex) {
    switch (cellDataKey) {
        case K_KEY_COLUMN_RANK:
            return renderColumn0(cellDataKey, rowData, rowIndex);
        case K_KEY_COLUMN_DESCRIPTION:
            return renderColumn1(cellDataKey, rowData, rowIndex);
        case K_KEY_COLUMN_PHONE:
            return renderColumn2(cellDataKey, rowData, rowIndex);
        default:
            return _react2.default.createElement(
                'div',
                null,
                rowData ? 'Hello world!' : ''
            );
    }
}
//# sourceMappingURL=ice_table_renderer.js.map