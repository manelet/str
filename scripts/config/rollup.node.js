import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.js',
      name: 'str',
      format: 'cjs'
    }
  ],
  plugins: [
    resolve({ browser: false }),
    babel({
      babelrc: false,
      // externalHelpers: false,
      // runtimeHelpers: true,
      comments: false,
      presets: [
        ['@babel/env', { modules: false }]
      ]
    })
  ]
}
