/* global describe, it */
import { expect } from 'chai'
import capitalize from './'
import str from '../../'

describe('capitalize test suite', () => {
  it('should capitalize a string', () => {
    const text = 'eJEmplo'
    const result = 'Ejemplo'
    expect(capitalize(text)).to.equal(result)
  })

  it('should capitalize a string using str instance', () => {
    const text = 'eJEmplo'
    const result = 'Ejemplo'
    expect(str(text).capitalize().value).to.equal(result)
  })

  it('should capitalize a string with restLower to false', () => {
    const text = 'eJEmplo'
    const result = 'EJEmplo'
    expect(capitalize(text, false)).to.equal(result)
  })

  it('should capitalize a string with restLower to false using str instance', () => {
    const text = 'eJEmplo'
    const result = 'EJEmplo'
    expect(str(text).capitalize(false).value).to.equal(result)
  })
})
