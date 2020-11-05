'use strict';

/**
 * @function upper
 * @description Transform a string to uppercase
 * @param {String} str
 * @return {String} Uppercased string
 * @example
 * upper('test')
 * // TEST
 * @example
 * str('test').upper().value
 * // TEST
 */
var upper = str => String(str).toUpperCase();

module.exports = upper;
