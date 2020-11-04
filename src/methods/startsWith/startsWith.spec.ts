/* global describe, it */
import { expect } from 'chai'
import startsWith from './startsWith'
// import str from '../..'

describe('startsWith test suite', () => {
  it('should check if a string starts with a substring', () =>
    expect(startsWith('test', 'te')).to.equal(true)
  )

  it('should check if a string starts with a substring in certain position', () =>
    expect(startsWith('testing', 'st', 2)).to.equal(true)
  )

  // it('should check if a string starts with a substring using str instance', () =>
  //   expect(str('test').startsWith('te')).to.equal(true)
  // )
})
