'use strict';

/**
 * @function lower
 * @description Transform str to lower case
 * @param {String} str
 * @return {String} Lower cased string
 * @example
 * lower('TEST')
 * // test
 * @example
 * str('TEST').lower().value
 * // test
 */
var lower = str => str.toLowerCase();

module.exports = lower;
