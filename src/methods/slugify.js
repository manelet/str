import trim from './trim'

const slugify = (str, sep = '-') =>
  trim(str)
    .toLowerCase()
    .replace(/ /g, sep) // Cambio espacios por el separador
    .normalize('NFD') // Quito todas las tildes
    .replace(/[\u0300-\u036f]/g, '')

export default slugify
