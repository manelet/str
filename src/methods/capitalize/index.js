/**
 * @function capitalize
 * @description Capitalizes a word, first letter uppercase, rest lowercase
 * @param {String} str
 * @param {Boolean} restLower (Defaults to true)
 * @return {String} Capitalized word
 * @example
 * capitalize('tEsT')
 * // Test
 * @example
 * str('tEsT').capitalize.value
 * // Test
 * @example
 * str('tEsT').capitalize(false)
 * // TEsT
 */
export default (str, restLower = true) =>
  str.charAt(0).toUpperCase() + (
    restLower
      ? str.slice(1).toLowerCase()
      : str.slice(1)
  )
