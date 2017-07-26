'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var SizeHoc = function SizeHoc(Component) {
  var SizeHocComponent = React.createClass({
    displayName: 'SizeHocComponent',
    componentDidMount: function componentDidMount() {
      this._update();
      window.addEventListener('resize', this._onResize, false);
    },
    componentWillUnmount: function componentWillUnmount() {
      window.removeEventListener('resize', this._onResize);
    },
    _onResize: function _onResize() {
      clearTimeout(this._updateTimer);
      this._updateTimer = setTimeout(this._update, 16);
    },
    _update: function _update() {
      if (this.isMounted()) {
        var node = this.component.getDOMNode();
        this.setState({
          width: node.offsetWidth,
          height: node.offsetHeight
        });
      }
    },
    render: function render() {
      var _this = this;

      return React.createElement(Component, _extends({ ref: function ref(v) {
          return _this.component = v;
        } }, this.props, this.state));
    }
  });
  return SizeHocComponent;
};

module.exports = SizeHoc;
//# sourceMappingURL=_size_hoc.js.map