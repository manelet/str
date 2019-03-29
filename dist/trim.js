"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _default = trim;
exports.default = _default;
module.exports = exports.default;