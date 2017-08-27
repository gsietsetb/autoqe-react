"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
    var name = _ref.name,
        label = _ref.label,
        onChange = _ref.onChange,
        placeholder = _ref.placeholder,
        value = _ref.value,
        error = _ref.error,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? "text" : _ref$type;

    var wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return _react2.default.createElement(
        "div",
        { className: wrapperClass },
        _react2.default.createElement(
            "label",
            { htmlFor: name },
            label
        ),
        _react2.default.createElement(
            "div",
            { className: "field" },
            _react2.default.createElement("input", {
                type: type,
                name: name,
                className: "form-control",
                placeholder: placeholder,
                value: value,
                onChange: onChange }),
            error && _react2.default.createElement(
                "div",
                { className: "alert alert-danger" },
                error
            )
        )
    );
};

TextInput.propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.string,
    error: _propTypes2.default.string
};

exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map