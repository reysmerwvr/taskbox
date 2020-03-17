"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Card.css");

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _useResize3 = _interopRequireDefault(require("./useResize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Card(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      status = _ref.status,
      title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;

  var _useResize = (0, _useResize3.default)(),
      _useResize2 = _slicedToArray(_useResize, 1),
      avatarDisplay = _useResize2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      clientWidth = _useState2[0],
      setClientWidth = _useState2[1];

  var rootElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var current = rootElement.current;

    if (current) {
      setClientWidth(current.clientWidth);
    }
  }, []);
  return _react.default.createElement("div", {
    className: "card-root",
    style: style && style,
    ref: rootElement
  }, _react.default.createElement("div", {
    className: "card-root__avatar"
  }, _react.default.createElement(_Avatar.default, {
    src: src,
    alt: alt,
    status: status,
    avatarDisplay: clientWidth < 160 ? 'none' : avatarDisplay
  })), _react.default.createElement("div", {
    className: "card-root__content"
  }, _react.default.createElement("span", {
    className: "card-root__content__spam card-root__content__spam_title"
  }, title), _react.default.createElement("span", {
    className: "card-root__content__spam card-root__content__spam_subtitle"
  }, subtitle)));
}

Card.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string,
  status: _propTypes.default.oneOf(['active', 'inactive']),
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string.isRequired,
  style: _propTypes.default.shape({
    maxWidth: _propTypes.default.string,
    maxHeight: _propTypes.default.string
  })
};
Card.defaultProps = {
  alt: 'avatar',
  status: 'active',
  style: {}
};
var _default = Card;
exports.default = _default;

//# sourceMappingURL=Card.js.map