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

  var trim = (function (str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  });

  var camelCase = function camelCase(str, _ref) {
    var _ref$pascalCase = _ref.pascalCase,
        pascalCase = _ref$pascalCase === void 0 ? false : _ref$pascalCase;
    str = Array.isArray(str) ? str.join(' ') : str;
    str = trim(str).split(' ').map(function (c) {
      return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();
    }).join('');

    if (!str.length) {
      return '';
    }

    if (str.length === 1) {
      return pascalCase ? str.toUpperCase() : str.toLowerCase();
    }

    if (pascalCase) {
      str[0] = str.charAt(0).toUpperCase();
    }

    return str;
  };

  var slugify = function slugify(str, sep) {
    if (sep === void 0) {
      sep = '-';
    }

    var a = trim(str).toLowerCase().replace(/ /g, sep) // Cambio espacios por el separador
    .normalize('NFD') // Quito todas las tildes
    .replace(/[\u0300-\u036f]/g, '');
    return a;
  };

  var toLowerCase = function toLowerCase(str) {
    return str.toLowerCase();
  };

  var functions = {
    camelCase: camelCase,
    slugify: slugify,
    toLowerCase: toLowerCase,
    trim: trim
  };

  var Str =
  /*#__PURE__*/
  function () {
    function Str(value) {
      var _this = this;

      this._value = value;
      Object.keys(functions).map(function (f) {
        _this[f] = function () {
          this._value = functions[f](this._value);
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

  return str;

}));