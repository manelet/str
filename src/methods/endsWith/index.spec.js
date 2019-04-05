/* global describe, it */
import { expect } from 'chai'
import endsWith from './'
import str from '../../'

describe('endsWith test suite', () => {
  it('should check if a string ends with a substring', () =>
    expect(endsWith('test', 'st')).to.equal(true)
  )

  it('should check if a string ends with a substring in certain position', () =>
    expect(endsWith('testing', 'test', 4)).to.equal(true)
  )

  // it('should check if a string ends with a substring using str instance', () =>
  //   expect(str('test').endsWith('st')).to.equal(true)
  // )
})
