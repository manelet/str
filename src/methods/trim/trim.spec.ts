/* global describe, it */
import { expect } from 'chai'
import trim from './trim'
// import str from '../..'

describe('trim test suite', () => {
  it('should trim a string left and right', () => {
    const text = ' Ejemplo '
    const result = 'Ejemplo'
    expect(trim(text)).to.equal(result)
  })

  // it('should trim a string left and right using str instance', () => {
  //   const text = ' Ejemplo '
  //   const result = 'Ejemplo'
  //   expect(str(text).trim().value).to.equal(result)
  // })
})
