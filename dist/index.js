"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methods = _interopRequireDefault(require("./methods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Str =
/*#__PURE__*/
function () {
  function Str(value) {
    var _this = this;

    _classCallCheck(this, Str);

    this._value = value;
    Object.keys(_methods.default).map(function (f) {
      _this[f] = function () {
        this._value = _methods.default[f](this._value);
        return this;
      };
    });
  }

  _createClass(Str, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }]);

  return Str;
}();

function str(value) {
  return new Str(value);
} // const compose = (...fns) =>
//   fns.reduceRight((prevFn, nextFn) =>
//     (...args) => nextFn(prevFn(...args)),
//   value => value
//   )


var _default = str;
exports.default = _default;
module.exports = exports.default;