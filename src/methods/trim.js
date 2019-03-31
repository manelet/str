/**
 * @function trim
 * @description Trims left and right a string
 * @param {String} str
 * @return {String} Trimmed string
 * @example
 * trim(' This is a tesT ')
 * // This is a tesT
 * @example
 * str(' This is a tesT ').trim().value
 * // This is a tesT
 */
const trim = str =>
  str
    .replace(/^\s+/, '')
    .replace(/\s+$/, '')

export default trim
