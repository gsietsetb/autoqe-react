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

var _AuthStore = require('../../store/AuthStore');

var _AuthStore2 = _interopRequireDefault(_AuthStore);

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

var IndexComponent = function (_Component) {
    _inherits(IndexComponent, _Component);

    function IndexComponent() {
        _classCallCheck(this, IndexComponent);

        var _this = _possibleConstructorReturn(this, (IndexComponent.__proto__ || Object.getPrototypeOf(IndexComponent)).call(this));

        _this.state = {
            authenticated: _AuthStore2.default.isAuthenticated()
        };
        return _this;
    }

    _createClass(IndexComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                !this.state.authenticated ? _react2.default.createElement(
                    'h2',
                    null,
                    'Log in to view contact details'
                ) : _react2.default.createElement(
                    'h2',
                    null,
                    'Click on a contact to view their profile'
                )
            );
        }
    }]);

    return IndexComponent;
}(_react.Component);

exports.default = IndexComponent;
//# sourceMappingURL=Index.js.map