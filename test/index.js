const { expect } = require('chai')
const { slugify, trim } = require('../src')

describe('str Test suite', () => {
  describe('stlugify', () => {
    it('should slugify a string', () => {
      const str = 'EstO És 1N ÈjemPlo'
      const result = 'esto-es-1n-ejemplo'
      expect(slugify(str)).to.equal(result)
    })

    it('should trim a string left and right', () => {
      const str = ' Ejemplo '
      const result = 'Ejemplo'
      expect(trim(str)).to.equal(result)
    })
  })
})