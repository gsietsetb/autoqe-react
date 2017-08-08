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

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AuthConstants = require('../constants/AuthConstants');

var _AuthConstants2 = _interopRequireDefault(_AuthConstants);

var _events = require('events');

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

var CHANGE_EVENT = 'change';

function setUser(profile, token) {
    if (!localStorage.getItem('id_token')) {
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', token);
    }
}

function removeUser() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
}

var AuthStoreClass = function (_EventEmitter) {
    _inherits(AuthStoreClass, _EventEmitter);

    function AuthStoreClass() {
        _classCallCheck(this, AuthStoreClass);

        return _possibleConstructorReturn(this, (AuthStoreClass.__proto__ || Object.getPrototypeOf(AuthStoreClass)).apply(this, arguments));
    }

    _createClass(AuthStoreClass, [{
        key: 'emitChange',
        value: function emitChange() {
            this.emit(CHANGE_EVENT);
        }
    }, {
        key: 'addChangeListener',
        value: function addChangeListener(callback) {
            this.on(CHANGE_EVENT, callback);
        }
    }, {
        key: 'removeChangeListener',
        value: function removeChangeListener(callback) {
            this.removeListener(CHANGE_EVENT, callback);
        }
    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            if (localStorage.getItem('id_token')) {
                return true;
            }
            return false;
        }
    }, {
        key: 'getUser',
        value: function getUser() {
            return localStorage.getItem('profile');
        }
    }, {
        key: 'getJwt',
        value: function getJwt() {
            return localStorage.getItem('id_token');
        }
    }]);

    return AuthStoreClass;
}(_events.EventEmitter);

var AuthStore = new AuthStoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
AuthStore.dispatchToken = _AppDispatcher2.default.register(function (action) {

    switch (action.actionType) {

        case _AuthConstants2.default.LOGIN_USER:
            setUser(action.profile, action.token);
            AuthStore.emitChange();
            break;

        case _AuthConstants2.default.LOGOUT_USER:
            removeUser();
            AuthStore.emitChange();
            break;

        default:
    }
});

exports.default = AuthStore;
//# sourceMappingURL=AuthStore.js.map