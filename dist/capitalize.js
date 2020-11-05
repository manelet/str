'use strict';

var trim = require('./trim.js');

/**
 * @function capitalize
 * @description Capitalizes a string after applying a trim to it
 * @param {String} str
 * @return {String}
 * @example
 * capitalize('test')
 * // Test
 * @example
 * str('TEST').capitalize()
 * // Test
 */
var capitalize = str => {
    str = trim(str);
    return String(str.charAt(0).toUpperCase()) + String(str.slice(1).toLowerCase());
};

module.exports = capitalize;
