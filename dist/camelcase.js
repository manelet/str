'use strict';

var trim = require('./trim.js');
var capitalize = require('./capitalize.js');

/**
 * @function camelcase
 * @description Returns a string in camelcase after trimming it
 * @param {String} string
 * @return {String} The camelcase string
 * @example
 * camelcase(' This is a tesT ')
 * // thisIsATest
 * @example
 * str(' This is a tesT ').camelcase().value
 * // thisIsATest
 */
var camelcase = (string) => trim(string)
    .toLowerCase()
    .split(' ')
    .reduce((acc, word, i) => acc + (i === 0 ? word : capitalize(word)), '');

module.exports = camelcase;
