/* global describe, it */
const { expect } = require('chai')
const createStr = require('../src')
const str = createStr()

console.log(str)
process.exit()

describe('str Test suite', () => {
  describe('stlugify', () => {
    it('should slugify a string', () => {
      const str = 'EstO És 1N ÈjemPlo'
      const result = 'esto-es-1n-ejemplo'
      expect(str.slugify(str)).to.equal(result)
    })

    it('should trim a string left and right', () => {
      const str = ' Ejemplo '
      const result = 'Ejemplo'
      expect(str.trim(str)).to.equal(result)
    })

    // it('should create a function from functions', () => {
    //   const str = ' èj3mPLó '
    //   const result = 'ej3mplo'
    //   const slugifyAndTrim = compose(trim, slugify)
    //   expect(
    //     slugifyAndTrim(str)
    //   ).to.equal(result)
    // })
  })
})
