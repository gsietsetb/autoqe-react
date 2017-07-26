'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactIntl.IntlProvider,
            { locale: 'es' },
            _react2.default.createElement(_Root2.default, { history: _reactRouterDom.BrowserRouter })
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
(0, _registerServiceWorker2.default)();
//# sourceMappingURL=index.js.map