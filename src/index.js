import functions from './methods'

class Str {
  constructor (value) {
    this._value = value

    Object.keys(functions).map(f => {
      this[f] = function (...args) {
        this._value = functions[f].call(null, this._value, ...args)
        return this
      }
    })
  }

  get value () {
    return this._value
  }
}

function str (value) {
  return new Str(value)
}

export default str
