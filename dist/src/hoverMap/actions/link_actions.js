'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gotoLink = gotoLink;
exports.gotoLinkWParams = gotoLinkWParams;

var _route_template = require('../utils/route_template.js');

var _route_template2 = _interopRequireDefault(_route_template);

var _text = require('../utils/text.js');

var _text2 = _interopRequireDefault(_text);

var _link_action_types = require('../consts/link_action_types.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeTemplatesCache_ = {};

function gotoLink(url) {
  return {
    type: _link_action_types.SWITCH_LINK,
    url: url
  };
}

function gotoLinkWParams(link, params, routeContextParams, defaultParams) {
  if (routeContextParams && link !== undefined && typeof link === 'string') {
    if (!(link in routeTemplatesCache_)) {
      routeTemplatesCache_[link] = (0, _route_template2.default)(link);
    }

    var linkTemplate = routeTemplatesCache_[link];
    var url = linkTemplate(_text2.default.encode_link_object_properties(Object.assign({}, defaultParams || {}, routeContextParams.toJS(), params || {})));

    return {
      type: _link_action_types.SWITCH_LINK,
      url: url
    };
  }

  throw new Error('unrecognized link');
}
//# sourceMappingURL=link_actions.js.map