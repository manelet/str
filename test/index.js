/* global describe, it */
import { expect } from 'chai'
import str from '../src'

import slugify from '../src/methods/slugify'
import trim from '../src/methods/trim'
import lower from '../src/methods/lower'
import count from '../src/methods/count'

describe('str individual methods test suite', () => {
  it('should count characters in a string', () => expect(count('test')).to.equal(4))

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

  it('should trim a string left and right', () => {
    const text = ' Ejemplo '
    const result = 'Ejemplo'
    expect(trim(text)).to.equal(result)
  })

  it('should lower case a string', () => {
    const text = 'EJEMPLO'
    const result = 'ejemplo'
    expect(lower(text)).to.equal(result)
  })
})

describe('str class test suite', () => {
  it('should count characters in a string', () => expect(str('test').length).to.equal(4))

  it('should slugify a string', () => {
    const text = 'EstO És 1N ÈjemPlo'
    const result = 'esto-es-1n-ejemplo'
    expect(str(text).slugify().value).to.equal(result)
  })

  it('should slugify a string with custom delimiter', () => {
    const text = 'EstO És 1N ÈjemPlo'
    const result = 'esto:es:1n:ejemplo'
    expect(str(text).slugify(':').value).to.equal(result)
  })

  it('should trim a string left and right', () => {
    const text = ' Ejemplo '
    const result = 'Ejemplo'
    expect(str(text).trim().value).to.equal(result)
  })

  it('should lower case a string', () => {
    const text = 'EJEMPLO'
    const result = 'ejemplo'
    expect(str(text).lower().value).to.equal(result)
  })
})
