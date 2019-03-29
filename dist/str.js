(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.str = factory());
}(this, function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var trim = function trim(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  };

  var slugify = function slugify(str, sep) {
    if (sep === void 0) {
      sep = '-';
    }
    return trim(str).toLowerCase().replace(/ /g, sep)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  };

  var lower = (function (str) {
    return str.toLowerCase();
  });

  var functions = {
    slugify: slugify,
    lower: lower,
    trim: trim
  };

  var Str =
  function () {
    function Str(value) {
      var _this = this;
      this._value = value;
      Object.keys(functions).map(function (f) {
        _this[f] = function () {
          var _functions$f;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          this._value = (_functions$f = functions[f]).call.apply(_functions$f, [null, this._value].concat(args));
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
  }

  return str;

}));
