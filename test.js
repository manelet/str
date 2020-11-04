const { slugify } = require('./dist/cjs/index')
console.log('{ slugify }', slugify);

const slugify2 = require('./dist/cjs/slugify')
console.log('str/slugify', slugify2);

const str = require('./dist/cjs/index')
console.log('str', str.slugify);