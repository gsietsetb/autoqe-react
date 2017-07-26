'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = render;

var _react = require('redux/react');

var _init_redux = require('./init_redux.js');

var _init_redux2 = _interopRequireDefault(_init_redux);

var _user_routes = require('actions/user_routes.js');

var userRoutesActions = _interopRequireWildcard(_user_routes);

var _main = require('components/main.jsx');

var _main2 = _interopRequireDefault(_main);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// this function called on client and on server
function render(_ref) {
  var React = _ref.React,
      args = _objectWithoutProperties(_ref, ['React']);

  return (0, _init_redux2.default)(_extends({ userRoutesActions: userRoutesActions }, args)).then(function (redux) {
    return {
      component: React.createElement(
        _react.Provider,
        { redux: redux },
        function () {
          return React.createElement(
            _react.Connector,
            { select: function select(state) {
                return state.router.toJS();
              } },
            function (router) {
              return React.createElement(_main2.default, router);
            }
          );
        }
      ),

      initialState: redux.getState()
    };
  }, function (err) {
    console.error(err); // eslint-disable-line no-console
    throw err;
  });
}
//# sourceMappingURL=render.js.map