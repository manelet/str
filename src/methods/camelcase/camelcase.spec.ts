/* global describe, it */
import { expect } from 'chai'
import camelcase from '.'
// import str from '../..'

describe('camelcase test suite', () => {
  it('should return the inserted string in camel case format', () => {
    expect(camelcase('This is A test')).to.equal('thisIsATest')
  })
  // it('should work using the str instance', () => {
  //   expect(str(' THIS is a TeST').camelcase().value).to.equal('thisIsATest')
  // })
})
