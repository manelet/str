const slugify = (str, sep = '-') =>
  str
    .toLowerCase()
    .replace(/ /g, sep) // Cambio espacios por el separador
    .normalize('NFD') // Quito todas las tildes
    .replace(/[\u0300-\u036f]/g,"")

module.exports = { slugify }