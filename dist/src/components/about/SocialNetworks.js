'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _contact = require('../../img/icons/material/contact.svg');

var _contact2 = _interopRequireDefault(_contact);

var _reactRouterDom = require('react-router-dom');

var _reactInstagramEmbed = require('react-instagram-embed');

var _reactInstagramEmbed2 = _interopRequireDefault(_reactInstagramEmbed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocialNetworkComp = function (_Component) {
    _inherits(SocialNetworkComp, _Component);

    function SocialNetworkComp() {
        _classCallCheck(this, SocialNetworkComp);

        return _possibleConstructorReturn(this, (SocialNetworkComp.__proto__ || Object.getPrototypeOf(SocialNetworkComp)).apply(this, arguments));
    }

    _createClass(SocialNetworkComp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'section', id: 'section-what-it-does' },
                _react2.default.createElement(
                    'header',
                    { className: 'section-header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'section-header-title' },
                            _react2.default.createElement('img', { src: _contact2.default, height: 30, alt: 'Build Customer Loyalty' }),
                            '\xA0 Redes Sociales'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Row,
                            { className: 'social-container' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                _react2.default.createElement('script', { type: 'IN/FollowCompany', 'data-id': '16232988', 'data-counter': 'right' }),
                                _react2.default.createElement('div', { className: 'g-ytsubscribe', 'data-channelid': 'UC7RUb3Ieez8Pl9uLIhZclyQ',
                                    'data-layout': 'default', 'data-theme': 'dark', 'data-count': 'default' }),
                                '\xA0 \xA0'
                            )
                        ),
                        _react2.default.createElement('div', { className: 'section-header-text' }),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=contact@autoqe.com&cc=gsierra@guillesierra.com&su=Contacto Autoqe&body=Buenas tardes, me gustar\xEDa recibir m\xE1s informaci\xF3n acerca de...' },
                            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'envelope' }),
                            ' \xA0 contact@autoqe.com'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'grid-row-two-up-skinny' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid-item sub-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'sub-section-text' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fb-page',
                                        'data-href': 'https://www.facebook.com/autoqe',
                                        'data-small-header': 'false',
                                        'data-adapt-container-width': 'true',
                                        'data-hide-cover': 'false',
                                        'data-show-facepile': 'true' },
                                    _react2.default.createElement(
                                        'blockquote',
                                        { cite: 'https://www.facebook.com/autoqe',
                                            className: 'fb-xfbml-parse-ignore' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: 'https://www.facebook.com/autoqe' },
                                            'Autoqe'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'grid-item sub-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'sub-section-text' },
                                _react2.default.createElement(_reactInstagramEmbed2.default, {
                                    url: 'https://www.instagram.com/p/BWcbc2gFoTX/?taken-by=autoqe',
                                    maxWidth: 320,
                                    hideCaption: true,
                                    containerTagName: 'div',
                                    protocol: ''
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SocialNetworkComp;
}(_react.Component);

exports.default = SocialNetworkComp;
//# sourceMappingURL=SocialNetworks.js.map