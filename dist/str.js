'use strict';

const trim = str => str.replace(/^\s+/, '').replace(/\s+$/, '');

const slugify = (str, sep = '-') => trim(str).toLowerCase().replace(/ /g, sep)
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '');

var lower = (str => str.toLowerCase());

var count = (str => String(str).length);

var upper = (str => String(str).toUpperCase());

var startsWith = ((str, sub, pos = 0) => String(str).indexOf(sub, pos) === pos);

const endsWith = (str, sub, pos) => {
  str = String(str);
  if (!pos || typeof pos !== 'number' || !isFinite(pos) || Math.floor(pos) !== pos || pos > str.length) {
    pos = str.length;
  }
  pos -= sub.length;
  const index = str.indexOf(sub, pos - 1);
  return index !== -1 && index === pos;
};

var capitalize = (str => {
  str = trim(str);
  return String(str.charAt(0).toUpperCase()) + String(str.slice(1).toLowerCase());
});

var camelcase = (string => trim(string).toLowerCase().split(' ').reduce((acc, word, i) => acc + (i === 0 ? word : capitalize(word)), ''));

var functions = {
  count,
  slugify,
  lower,
  upper,
  trim,
  startsWith,
  endsWith,
  capitalize,
  camelcase
};

const NOT_CHAINABLE = ['count', 'startsWith', 'endsWith'];
class Str {
  constructor(value) {
    this.value = value;
    Object.keys(functions).map(f => {
      this[f] = function (...args) {
        const r = functions[f].call(null, this.value, ...args);
        if (NOT_CHAINABLE.includes(f)) {
          return r;
        }
        this.value = r;
        return this;
      };
    });
    this.length = this.count(this.value);
  }
}
function str(value) {
  return new Str(value);
}

module.exports = str;
