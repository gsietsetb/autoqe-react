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

var _reactBootstrap = require('react-bootstrap');

var _stripe_w = require('../../img/brands/stripe_w.png');

var _stripe_w2 = _interopRequireDefault(_stripe_w);

var _paypal_w = require('../../img/brands/paypal_w.png');

var _paypal_w2 = _interopRequireDefault(_paypal_w);

var _visa_w = require('../../img/brands/visa_w.png');

var _visa_w2 = _interopRequireDefault(_visa_w);

var _mastercard_w = require('../../img/brands/mastercard_w.png');

var _mastercard_w2 = _interopRequireDefault(_mastercard_w);

var _AmericanExpres_w = require('../../img/brands/American-Expres_w.png');

var _AmericanExpres_w2 = _interopRequireDefault(_AmericanExpres_w);

var _lock = require('../../img/icons/material/lock.svg');

var _lock2 = _interopRequireDefault(_lock);

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

var SecurePayment = function (_Component) {
    _inherits(SecurePayment, _Component);

    function SecurePayment() {
        _classCallCheck(this, SecurePayment);

        return _possibleConstructorReturn(this, (SecurePayment.__proto__ || Object.getPrototypeOf(SecurePayment)).apply(this, arguments));
    }

    _createClass(SecurePayment, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    {className: 'section contactBanner', id: 'section-what-it-does'},
                    _react2.default.createElement(
                        'header',
                        {className: 'section-header'},
                        _react2.default.createElement(
                            'div',
                            {className: 'container'},
                            _react2.default.createElement(
                                'h3',
                                {className: 'section-header-title'},
                                _react2.default.createElement('img', {
                                    src: _lock2.default,
                                    height: 30,
                                    alt: 'Secure payment'
                                }),
                                ' \xA0 Plataformas de pago seguro'
                            ),
                            _react2.default.createElement(
                                'div',
                                {className: 'section-header-text'},
                                _react2.default.createElement(_reactBootstrap.Image, {
                                    src: _mastercard_w2.default,
                                    height: '60'
                                }),
                                ' \xA0',
                                _react2.default.createElement(_reactBootstrap.Image, {
                                    src: _visa_w2.default,
                                    height: '60'
                                }),
                                ' \xA0',
                                _react2.default.createElement(_reactBootstrap.Image, {
                                    src: _AmericanExpres_w2.default,
                                    height: '60'
                                }),
                                ' \xA0',
                                _react2.default.createElement(_reactBootstrap.Image, {
                                    src: _stripe_w2.default,
                                    height: '60'
                                }),
                                ' \xA0',
                                _react2.default.createElement(_reactBootstrap.Image, {
                                    src: _paypal_w2.default,
                                    height: '60'
                                }),
                                ' \xA0'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SecurePayment;
}(_react.Component);

exports.default = SecurePayment;
//# sourceMappingURL=SecurePayment.js.map