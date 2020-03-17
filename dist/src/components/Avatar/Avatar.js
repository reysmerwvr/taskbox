"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Avatar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Avatar(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      status = _ref.status,
      avatarDisplay = _ref.avatarDisplay;
  return _react.default.createElement("span", {
    className: "badge-root"
  }, _react.default.createElement("div", {
    className: "avatar-root avatar-root_circle",
    style: {
      display: avatarDisplay
    }
  }, _react.default.createElement("img", {
    alt: alt,
    src: src,
    className: "avatar-root__img"
  })), _react.default.createElement("span", {
    className: "badge-root__spam badge-root__spam_dot badge-root__spam_".concat(status)
  }));
}

Avatar.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string,
  status: _propTypes.default.oneOf(['active', 'inactive']),
  avatarDisplay: _propTypes.default.oneOf(['flex', 'none'])
};
Avatar.defaultProps = {
  alt: 'avatar',
  status: 'active',
  avatarDisplay: 'flex'
};
var _default = Avatar;
exports.default = _default;

//# sourceMappingURL=Avatar.js.map