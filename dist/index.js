'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

var slugify = function slugify(str) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  return trim(str).toLowerCase().replace(/ /g, sep) // Cambio espacios por el separador
  .normalize('NFD') // Quito todas las tildes
  .replace(/[\u0300-\u036f]/g, '');
};

var toLowerCase = (function (str) {
  return str.toLowerCase();
});

// import camelCase from './camelcase'
var functions = {
  // camelCase,
  slugify: slugify,
  toLowerCase: toLowerCase,
  trim: trim
};

var Str =
/*#__PURE__*/
function () {
  function Str(value) {
    var _this = this;

    _classCallCheck(this, Str);

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

module.exports = str;
