import React, {Component, PropTypes} from 'react';
import PureRender from 'react-addons-pure-render-mixin';

export default class MainMapLayout extends Component {
  static propTypes = {
    renderMap: PropTypes.func,
    renderTable: PropTypes.func,
    layout: PropTypes.string
  };

  static defaultProps = {
    layout: 'left'
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRender.shouldComponentUpdate.bind(this);
  }

  render() {
    if (this.props.layout === 'left') {
      return (
        <div style={{height: '100%', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: '62%', height: '100%'}}>
              <div render={this.props.renderMap}/>
            {/*<PureRenderer render={this.props.renderMap} />*/}
          </div>
          <div style={{position: 'absolute', right: 0, top: 0, width: '38%', height: '100%'}}>
            {/*<PureRenderer render={this.props.renderTable} />*/}
          </div>
        </div>
      );
    }

    return (
      <div style={{height: '100%', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', left: 0, top: 0, width: '38%', height: '100%'}}>
          {/*<PureRenderer render={this.props.renderTable} />*/}
        </div>
        <div style={{position: 'absolute', right: 0, top: 0, width: '62%', height: '100%'}}>
          {/*<PureRenderer render={this.props.renderMap} />*/}
        </div>
      </div>
    );
  }
}
