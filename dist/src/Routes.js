'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _UserDetail = require('./components/Users/UserDetail');

var _UserDetail2 = _interopRequireDefault(_UserDetail);

var _SearchBar = require('./components/Home/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _LastTrips = require('./components/Trips/LastTrips');

var _LastTrips2 = _interopRequireDefault(_LastTrips);

var _TripDetail = require('./components/Trips/TripDetail');

var _TripDetail2 = _interopRequireDefault(_TripDetail);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import Index from './components/Index';


var Root = function (_Component) {
    _inherits(Root, _Component);

    function Root() {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
    }

    _createClass(Root, [{
        key: 'render',


        // We need to provide a list of Routes
        // for our app, and in this case we are
        // doing so from a Routes component
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                {history: this.props.history},
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, {path: '/', component: _App2.default}),
                    _react2.default.createElement(_reactRouterDom.Route, {
                        path: '/find',
                        component: _SearchBar2.default
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, {
                        path: '/contact/:id',
                        component: _UserDetail2.default
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, {
                        path: '/trips/:id',
                        component: _TripDetail2.default
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, {
                        path: '/trips',
                        component: _LastTrips2.default
                    })
                )
            );
        }
    }]);

    return Root;
}(_react.Component);

exports.default = Root;
//# sourceMappingURL=Navigator.js.map
