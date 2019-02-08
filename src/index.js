const slugify = (str, sep = '-') =>
  trim(str)
    .toLowerCase()
    .replace(/ /g, sep) // Cambio espacios por el separador
    .normalize('NFD') // Quito todas las tildes
    .replace(/[\u0300-\u036f]/g, '')

const trim = str =>
  str
    .replace(/^\s+/, '')
    .replace(/\s+$/, '')

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
  value => value
  )

module.exports = { slugify, trim, compose }
