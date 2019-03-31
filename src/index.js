import functions from './methods'

const NOT_CHAINABLE = ['count']

/**
 @description Add all methods to the class and set the value to a hidden prop
 @param {String} value
 @class
 @classdesc Str chainable class
 */
class Str {
  constructor (value) {
    this.value = value

    Object.keys(functions).map(f => {
      this[f] = function (...args) {
        const r = functions[f].call(null, this.value, ...args)

        if (f.includes(NOT_CHAINABLE)) {
          return r
        }

        this.value = r
        return this
      }
    })

    this.length = this.count(this.value)
  }
}

function str (value) {
  return new Str(value)
}

export default str
