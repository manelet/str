/* global describe, it */
import { expect } from 'chai'
import lower from './'
import str from '../../'

describe('lower test suite', () => {
  it('should lower case a string', () => {
    const text = 'EJEMPLO'
    const result = 'ejemplo'
    expect(lower(text)).to.equal(result)
  })

  it('should lower case a string using str instance', () => {
    const text = 'EJEMPLO'
    const result = 'ejemplo'
    expect(str(text).lower().value).to.equal(result)
  })
})
