/* global describe, it */
import { expect } from 'chai'
import capitalize from './capitalize'
// import str from '../..'

describe('capitalize test suite', () => {
  it('should capitalize a string', () => {
    expect(capitalize('test ')).to.equal('Test')
  })

  // it('should capitalize a string using str instance', () =>
  //   expect(str('test ').capitalize().value).to.equal('Test')
  // )
})
