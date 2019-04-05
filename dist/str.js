(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.str = factory());
}(this, function () { 'use strict';

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

  var count = (function (str) {
    return String(str).length;
  });

  var upper = (function (str) {
    return String(str).toUpperCase();
  });

  var startsWith = (function (str, sub, pos) {
    if (pos === void 0) {
      pos = 0;
    }
    return String(str).indexOf(sub, pos) === pos;
  });

  var endsWith = function endsWith(str, sub, pos) {
    str = String(str);
    if (!pos || typeof pos !== 'number' || !isFinite(pos) || Math.floor(pos) !== pos || pos > str.length) {
      pos = str.length;
    }
    pos -= sub.length;
    var index = str.indexOf(sub, pos - 1);
    return index !== -1 && index === pos;
  };

  var capitalize = (function (str) {
    str = trim(str);
    return String(str.charAt(0).toUpperCase()) + String(str.slice(1).toLowerCase());
  });

  var functions = {
    count: count,
    slugify: slugify,
    lower: lower,
    upper: upper,
    trim: trim,
    startsWith: startsWith,
    endsWith: endsWith,
    capitalize: capitalize
  };

  var NOT_CHAINABLE = ['count', 'startsWith', 'endsWith'];
  var Str = function Str(value) {
    var _this = this;
    this.value = value;
    Object.keys(functions).map(function (f) {
      _this[f] = function () {
        var _functions$f;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var r = (_functions$f = functions[f]).call.apply(_functions$f, [null, this.value].concat(args));
        if (NOT_CHAINABLE.includes(f)) {
          return r;
        }
        this.value = r;
        return this;
      };
    });
    this.length = this.count(this.value);
  };
  function str(value) {
    return new Str(value);
  }

  return str;

}));
