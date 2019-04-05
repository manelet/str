/* global describe, it */
import { expect } from 'chai'
import upper from './'
import str from '../../'

describe('upper test suite', () => {
  it('should transform a string to uppercase', () =>
    expect(upper('test')).to.equal('TEST'))

  it('should transform a string to uppercase using str instance', () =>
    expect(str('test').upper().value).to.equal('TEST')
  )
})
