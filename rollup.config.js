import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import copy from 'rollup-plugin-copy'

function commonPlugins ({ browser, babelHelpers }) {
  return [
    resolve({ browser }),
    babel({
      babelrc: false,
      babelHelpers,
    }),
    copy({
      targets: [
        { src: './package.json', dest: './dist' },
        { src: './index.html', dest: './dist' }
      ]
    }),
    cleanup()
  ]
}

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/str.js',
        format: 'cjs',
        exports: 'default'
      }
    ],
    plugins: commonPlugins({ browser: false, babelHelpers: 'inline' })
  },
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/str.browser.js',
        format: 'iife',
        name: 'str'
      }
    ],
    plugins: commonPlugins({ browser: true, babelHelpers: 'bundled' })
  }  
]


