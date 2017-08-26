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

var _contact = require('../../img/icons/material/contact.svg');

var _contact2 = _interopRequireDefault(_contact);

var _reactRouterDom = require('react-router-dom');

var _reactInstagramEmbed = require('react-instagram-embed');

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
                {className: 'section', id: 'section-what-it-does'},
                _react2.default.createElement(
                    'header',
                    {className: 'section-header'},
                    _react2.default.createElement(
                        'div',
                        {className: 'container'},
                        _react2.default.createElement(
                            'h1',
                            {className: 'section-header-title'},
                            _react2.default.createElement('img', {
                                src: _contact2.default,
                                height: 30,
                                alt: 'Build Customer Loyalty'
                            }),
                            'Redes Sociales'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Row,
                            {className: 'social-container'},
                            _react2.default.createElement(
                                'h2',
                                null,
                                _react2.default.createElement('iframe', {
                                    src: 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fautoqe%2F&width=67&layout=button_count&action=like&size=small&show_faces=true&share=false&height=21&appId=1857064684552937',
                                    width: '67', height: '21', style: 'border:none;overflow:hidden', scrolling: 'no',
                                    frameBorder: '0', allowTransparency: 'true'
                                }),
                                _react2.default.createElement('div', {
                                    className: 'fb-like',
                                    'data-href': 'https://www.facebook.com/autoqe/',
                                    'data-layout': 'standard',
                                    'data-action': 'like',
                                    'data-size': 'small',
                                    'data-show-faces': 'false',
                                    'data-share': 'true'
                                }),
                                '\xA0 \xA0',
                                _react2.default.createElement('script', {
                                    type: 'IN/FollowCompany',
                                    'data-id': '16232988',
                                    'data-counter': 'right'
                                }),
                                'Twitter',
                                _react2.default.createElement(_reactRouterDom.Link, {
                                    className: 'twitter-follow-button',
                                    href: 'https://twitter.com/autoqe'
                                }),
                                '\xA0 \xA0 Youtube',
                                _react2.default.createElement('div', {
                                    className: 'g-ytsubscribe', 'data-channelid': 'UC7RUb3Ieez8Pl9uLIhZclyQ',
                                    'data-layout': 'default', 'data-theme': 'dark', 'data-count': 'default'
                                }),
                                '\xA0 \xA0'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {className: 'section-header-text'},
                            _react2.default.createElement(
                                'p',
                                null,
                                'S\xEDguenos en nuestras redes sociales para no perderte ninguna promoci\xF3n'
                            ),
                            _react2.default.createElement('script', {
                                type: 'IN/FollowCompany',
                                'data-id': '16232988',
                                'data-counter': 'right'
                            }),
                            '\xA0 \xA0',
                            _react2.default.createElement('div', {
                                className: 'g-ytsubscribe', 'data-channelid': 'UC7RUb3Ieez8Pl9uLIhZclyQ',
                                'data-layout': 'default', 'data-count': 'default'
                            }),
                            '\xA0 \xA0',
                            _react2.default.createElement(_reactRouterDom.Link, {
                                className: 'twitter-follow-button',
                                href: 'https://twitter.com/autoqe'
                            }),
                            "\n"
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            {href: 'https://mail.google.com/mail/?view=cm&fs=1&to=contact@autoqe.com&cc=gsierra@guillesierra.com&su=Contacto Autoqe&body=Buenas tardes, me gustar\xEDa recibir m\xE1s informaci\xF3n acerca de...'},
                            _react2.default.createElement(_reactBootstrap.Glyphicon, {glyph: 'envelope'}),
                            ' \xA0 contact@autoqe.com'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {className: 'container'},
                    _react2.default.createElement(
                        'div',
                        {className: 'grid-row-two-up-skinny'},
                        _react2.default.createElement(
                            'div',
                            {className: 'grid-item sub-section'},
                            _react2.default.createElement(
                                'div',
                                {className: 'sub-section-text'},
                                _react2.default.createElement(
                                    'div',
                                    {
                                        className: 'fb-page',
                                        'data-href': 'https://www.facebook.com/autoqe',
                                        'data-small-header': 'true',
                                        'data-adapt-container-width': 'true',
                                        'data-hide-cover': 'false',
                                        'data-show-facepile': 'true'
                                    },
                                    _react2.default.createElement(
                                        'blockquote',
                                        {
                                            cite: 'https://www.facebook.com/autoqe',
                                            className: 'fb-xfbml-parse-ignore'
                                        },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            {to: 'https://www.facebook.com/autoqe'},
                                            'Autoqe'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {className: 'grid-item sub-section'},
                            _react2.default.createElement(
                                'div',
                                {className: 'sub-section-text'},
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        className: 'instagram-media',
                                        'data-instgrm-captioned': true,
                                        'data-instgrm-version': '7',
                                        style: ' background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        {style: 'padding:8px;'},
                                        _react2.default.createElement(
                                            'div',
                                            {
                                                style: ' background:#F8F8F8; line-height:0; margin-top:40px; padding:33.33333333333333% 0; text-align:center; width:100%;'
                                            },
                                            _react2.default.createElement('div', {
                                                style: ' background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;'
                                            })
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {style: ' margin:8px 0 0 0; padding:0 4px;'},
                                            _react2.default.createElement(
                                                _reactRouterDom.Link,
                                                {
                                                    to: 'https://www.instagram.com/p/BW-SfInFBRp/',
                                                    style: ' color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;',
                                                    target: '_blank'
                                                },
                                                'Pronto podr\xE1s sentir la libertad de alquilar un auto o compartir trayectos de la manera m\xE1s facil y barata #economiaColaborativa #autoqe'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {style: ' color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;'},
                                            'A post shared by Autoqe, Auto al toque (@autoqe) on',
                                            _react2.default.createElement(
                                                'time',
                                                {
                                                    style: ' font-family:Arial,sans-serif; font-size:14px; line-height:17px;',
                                                    dateTime: '2017-07-25T14:41:22+00:00'
                                                },
                                                'Jul 25, 2017 at 7:41am PDT'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement('script', {
                                    async: true,
                                    defer: true,
                                    src: '//platform.instagram.com/en_US/embeds.js'
                                }),
                                _react2.default.createElement(_reactInstagramEmbed.InstagramEmbed, {
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