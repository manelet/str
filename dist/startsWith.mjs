/**
 * @function startsWith
 * @description Checks if a string starts with the provided substring
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
var startsWith = (str, sub, pos) => String(str).indexOf(sub, pos || 0) === (pos || 0);

export default startsWith;
