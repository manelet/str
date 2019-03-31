import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'

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
      runtimeHelpers: false,
      presets: [
        ['@babel/env', { loose: true, modules: false }]
      ]
    }),
    cleanup()
  ]
}
