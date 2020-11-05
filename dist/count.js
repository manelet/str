'use strict';

/**
 * @function count
 * @description Counts characters in a string
 * @param {String} str
 * @return {Number} Number of characters
 * @example
 * count('test')
 * // 4
 * @example
 * str('test').length
 * // 4
 * @example
 * str('test').count()
 * // 4
 */
var count = str => String(str).length;

module.exports = count;
