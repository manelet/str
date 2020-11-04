import trim from '../trim/trim'

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

export default str => {
  str = trim(str)
  return String(str.charAt(0).toUpperCase()) + String(str.slice(1).toLowerCase())
}
