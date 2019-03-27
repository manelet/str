import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/str.js',
      name: 'str',
      format: 'umd'
    }
  ],
  plugins: [
    resolve({ browser: true }),
    babel({
      babelrc: false,
      externalHelpers: false,
      runtimeHelpers: true,
      presets: [
        ['@babel/env', { loose: true, modules: false }]
      ]
    })
  ]
}
