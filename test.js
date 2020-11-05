const { slugify } = require('./dist/cjs')
console.log('{ slugify }', slugify);

const slugify2 = require('./dist/cjs/slugify')
console.log('str/slugify', slugify2);

const str = require('./dist/cjs')
console.log('str', str);