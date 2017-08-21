import React, {Component, PropTypes} from 'react';
import shouldPureComponentUpdate from 'react-pure-render-utils/function';

import MainMapLayout from './main_map_layout.jsx';
import IceTable from '../../controls/ice_table.jsx';
import MainMapBlock from './mainMap.jsx';

import {bindActionCreators, Connector} from 'redux';

import * as allMapActions from '../../actions/MapActions.js';

// slice actions to support map and table interfaces
const mapActions = (({ changeBounds: onBoundsChange, markerHoverIndexChange: onMarkerHover, showBallon: onChildClick}) => ({
    onBoundsChange, onMarkerHover, onChildClick
}))(allMapActions);


const tableActions = (({ tableHoveredRowIndexChange: onHoveredRowIndexChange, tableVisibleRowsChange: onVisibleRowsChange, showBallon: onRowClick}) => ({
    onHoveredRowIndexChange, onVisibleRowsChange, onRowClick
}))(allMapActions);


export default class MainMapPage extends Component {
  static propTypes = {
    layout: PropTypes.string
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  _renderMap() {
    return (
      <Connector select={state => ({
          center: state.map.get('mapInfo').get('center'),
          zoom: state.map.get('mapInfo').get('zoom'),
          markers: state.map.get('dataFiltered'),
          visibleRowFirst: state.map.get('tableRowsInfo').get('visibleRowFirst'),
          visibleRowLast: state.map.get('tableRowsInfo').get('visibleRowLast'),
          maxVisibleRows: state.map.get('tableRowsInfo').get('maxVisibleRows'),
          hoveredRowIndex: state.map.get('tableRowsInfo').get('hoveredRowIndex'),
          openBallonIndex: state.map.get('openBalloonIndex')
        })}>
        {({dispatch, ...mapProps}) => (<MainMapBlock {...mapProps} {...bindActionCreators(mapActions, dispatch)} />)}
      </Connector>
    );
  }

  _renderTable() {
    return (
      <Connector select={state => ({
          markers: state.map.get('dataFiltered'),
          hoveredMapRowIndex: state.map.get('hoverMarkerIndex'),
          resetToStartObj: state.map.get('mapInfo')
        })}>
        {({dispatch, ...tableProps}) => (<IceTable {...tableProps} {...bindActionCreators(tableActions, dispatch)} />)}
      </Connector>
    );
  }

  render() {
    return (
      <MainMapLayout layout={this.props.layout} renderMap={this._renderMap} renderTable={this._renderTable} />
    );
  }
}
