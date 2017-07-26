'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.examples = undefined;

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var K_EXAMPLES_SOURCE_ROOT = 'https://github.com/istarkov/google-map-react-examples/blob/master/web/flux/components/examples/';

var exampleDefs = {
  main: {
    title: 'MAIN EXAMPLE',
    info: '<strong>MAP INTERFACE I WISH BE EVERYWHERE.</strong><br/><br/>' + '<div>' + 'Nice svg icons with any css animations;<br/>' + 'Nice looking conrollable tooltips and balloons;<br/>' + 'No table paging <i>(infinite table scroll)</i>;<br/>' + 'Ability to hover on every marker <i>(zoom out to test)</i>;<br/>' + 'Hover probability <i>(different hover probability for markers)</i>;<br/>' + 'No map moving on balloon open.<br/><br/>' + '</div>',
    source: K_EXAMPLES_SOURCE_ROOT + 'x_main/main_map_block.jsx'
  },

  simple: {
    title: 'SIMPLE EXAMPLE',
    info: 'Base map usage example. <br/>' + 'Show any react component on the map.',
    source: K_EXAMPLES_SOURCE_ROOT + 'x_simple/simple_map_page.jsx'
  },

  options: {
    title: 'CUSTOM MAP OPTIONS EXAMPLE',
    info: 'Custom map options usage example.',
    source: K_EXAMPLES_SOURCE_ROOT + 'x_options/options_map_page.jsx'
  },

  simple_hover: {
    title: 'SIMPLE HOVER EXAMPLE',
    info: 'Show base of internal hover algorithm.',
    source: K_EXAMPLES_SOURCE_ROOT + 'x_simple_hover/simple_hover_map_page.jsx'
  },

  distance_hover: {
    title: 'DISTANCE HOVER EXAMPLE',
    info: 'Show how to use internal hover algorithm.<br/>' + 'For use with non symmetric markers, or to tweak hover probability on some kind of markers.<br/>' + 'There is more probable to hover on marker A at this example.',
    source: K_EXAMPLES_SOURCE_ROOT + 'x_distance_hover/distance_hover_map_page.jsx'
  },

  events: {
    title: 'EVENTS EXAMPLE',
    info: 'Be sure you understand <a href="https://github.com/matthewwithanm/react-controllables">react-controllables</a>.<br/>' + 'Click on markers.',
    source: K_EXAMPLES_SOURCE_ROOT + 'x_events/events_map_page.jsx'
  },

  balderdash: {
    title: 'BALDERDASH',
    info: 'Many different markers.',
    source: K_EXAMPLES_SOURCE_ROOT + 'x_main/main_map_block.jsx'
  }
};

var examples = Object.keys(exampleDefs).reduce(function (r, k) {
  return r[k] = k, r;
}, {});

Object.keys(exampleDefs).reduce(function (prev, current) {
  exampleDefs[prev].next = _index2.default.K_SERVER_PATH + '/map/' + current;
  return current;
});

Object.keys(exampleDefs).reduceRight(function (prev, current) {
  exampleDefs[prev].prev = _index2.default.K_SERVER_PATH + '/map/' + current;
  return current;
});

Object.keys(exampleDefs).forEach(function (k) {
  exampleDefs.source = k;
});

exports.default = exampleDefs;
exports.examples = examples;
//# sourceMappingURL=example_defs.js.map