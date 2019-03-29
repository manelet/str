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

  /**
   * @function trim
   * @description Trims left and right a string
   * @param {String} str
   * @return {String} Trimmed string
   * @example
   * trim(' This is a tesT ')
   * // This is a tesT
   */
  var trim = function trim(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  };

  /**
   * @function slugify
   * @description Slugifys a string
   * @param {String} str
   * @param {String} del Delimiter, defaults to '-'
   * @return {String} Slugified string
   * @example
   * slugify(' This is a tesT ')
   * // this-is-a-test
   * @example
   * slugify(' This is a tesT ', ':')
   * // this:is:a:test
   */

  var slugify = function slugify(str, sep) {
    if (sep === void 0) {
      sep = '-';
    }

    return trim(str).toLowerCase().replace(/ /g, sep) // Cambio espacios por el separador
    .normalize('NFD') // Quito todas las tildes
    .replace(/[\u0300-\u036f]/g, '');
  };

  /**
   * @function lower
   * @description Transform str to lower case
   * @param {String} str
   * @return {String} Lower cased string
   * @example
   * lower('TEST')
   * // test
   */
  var lower = (function (str) {
    return str.toLowerCase();
  });

  // import camelCase from './camelcase'
  var functions = {
    // camelCase,
    slugify: slugify,
    lower: lower,
    trim: trim
  };

  /**
   @description Add all methods to the class and set the value to a hidden prop
   @param {String} value
   @class
   @classdesc Str chainable class
   */

  var Str =
  /*#__PURE__*/
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
