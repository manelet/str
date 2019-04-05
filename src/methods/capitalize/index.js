import trim from '../trim'

/**
 * @function capitalize
 * @description Capitalizes a string
 * @param {String} str
 * @return {String}
 * @example
 * capitalize('test')
 * // Test
 * @example
 * str('TEST').capitalize()
 * // Tets
 */

export default str => {
  str = trim(str)
  return String(str.charAt(0).toUpperCase()) + String(str.slice(1).toLowerCase())
}
