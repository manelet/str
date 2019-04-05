/* global describe, it */
import { expect } from 'chai'
import count from './'
import str from '../../'

describe('count test suite', () => {
  it('should count characters in a string', () =>
    expect(count('test')).to.equal(4))

  it('should count characters in a string using the function', () =>
    expect(str('test').count()).to.equal(4)
  )
})
