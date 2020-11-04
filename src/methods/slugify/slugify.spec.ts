/* global describe, it */
import { expect } from 'chai'
import { slugify } from './slugify'
// import str from '../..'

describe('slugify test suite', () => {
  it('should slugify a string', () => {
    const text = 'EstO És 1N ÈjemPlo'
    const result = 'esto-es-1n-ejemplo'
    expect(slugify(text)).to.equal(result)
  })

  it('should slugify a string with custom delimiter', () => {
    const text = 'EstO És 1N ÈjemPlo'
    const result = 'esto:es:1n:ejemplo'
    expect(slugify(text, ':')).to.equal(result)
  })

  // it('should slugify a string using str instance', () => {
  //   const text = 'EstO És 1N ÈjemPlo'
  //   const result = 'esto-es-1n-ejemplo'
  //   expect(str(text).slugify().value).to.equal(result)
  // })

  // it('should slugify a string with custom delimiter using str instance', () => {
  //   const text = 'EstO És 1N ÈjemPlo'
  //   const result = 'esto:es:1n:ejemplo'
  //   expect(str(text).slugify(':').value).to.equal(result)
  // })
})
