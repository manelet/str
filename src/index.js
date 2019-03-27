// import 'core-js'
// import '@babel/polyfill'
import functions from './methods'

class Str {
  constructor (value) {
    this._value = value

    Object.keys(functions).map(f => {
      this[f] = function () {
        this._value = functions[f](this._value)
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

// const compose = (...fns) =>
//   fns.reduceRight((prevFn, nextFn) =>
//     (...args) => nextFn(prevFn(...args)),
//   value => value
//   )

export default str
