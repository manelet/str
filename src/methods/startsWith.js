/**
 * @function startsWith
 * @description Checks if a string starts with a provided character
 * @param {String} str
 * @param {String} substring
 * @param {Number} [pos=0] Position to start checking. Defaults to 0
 * @return {Boolean} True / False
 * @example
 * startsWith('test', 'te')
 * // true
 * @example
 * str('test').startsWith('te')
 * // true
 */

export default (str, sub, pos = 0) => String(str).indexOf(sub, pos) === pos
