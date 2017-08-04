'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('babel-polyfill');

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Routes = require('./components/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _StoreConfig = require('./store/StoreConfig');

var _StoreConfig2 = _interopRequireDefault(_StoreConfig);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

var _TripActions = require('./actions/TripActions');

var _UserActions = require('./actions/UserActions');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_es2.default)));

require('dotenv').config();

var history = (0, _createBrowserHistory2.default)();

var store = (0, _StoreConfig2.default)();
store.dispatch(_TripActions.loadTrips);
store.dispatch((0, _UserActions.loadUsers)());

(0, _reactDom.render)(_react2.default.createElement(
    _reactIntl.IntlProvider,
    { locale: 'es-AR' },
    _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            { routes: _Routes2.default, history: history },
            _react2.default.createElement(_App2.default, null)
        )
    )
), document.getElementById('app'));
(0, _registerServiceWorker2.default)();
//# sourceMappingURL=index.js.map