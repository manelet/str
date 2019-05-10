import trim from '../trim'

/**
 * @function slugify
 * @description Slugifies a string
 * @param {String} str
 * @param {String} [del=-] Delimiter, defaults to '-'
 * @return {String} Slugified string
 * @example
 * slugify(' This is a tesT ')
 * // this-is-a-test
 * @example
 * slugify(' This is a tesT ', ':')
 * // this:is:a:test
 * @example
 * str(' This is a tesT ').slugify().value
 * // this-is-a-test
 */
const slugify = (str, sep = '-') =>
  trim(str)
    .toLowerCase()
    .replace(/ /g, sep) // Cambio espacios por el separador
    .normalize('NFD') // Quito todas las tildes
    .replace(/[\u0300-\u036f]/g, '')

export default slugify
