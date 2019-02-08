/* global describe, it */
const { expect } = require('chai')
const { slugify, trim, compose } = require('../src')

describe('str Test suite', () => {
  describe('stlugify', () => {
    it('should slugify a string', () => {
      const str = 'EstO És 1N ÈjemPlo'
      const result = 'esto-es-1n-ejemplo'
      expect(
        slugify(str)
      ).to.equal(result)
    })

    it('should trim a string left and right', () => {
      const str = ' Ejemplo '
      const result = 'Ejemplo'
      expect(
        trim(str)
      ).to.equal(result)
    })

    it('should create a function from functions', () => {
      const str = ' èj3mPLó '
      const result = 'ej3mplo'
      const slugifyAndTrim = compose(trim, slugify)
      expect(
        slugifyAndTrim(str)
      ).to.equal(result)
    })
  })
})
