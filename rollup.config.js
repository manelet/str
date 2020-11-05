import pkg from './package.json'
import fs from 'fs'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
// import { terser } from "rollup-plugin-terser";
// import resolve from "@rollup/plugin-node-resolve"

const getAllMethods = () => fs.readdirSync('./src/methods', 'utf8')
    .map(path => path !== 'index.ts' && `./src/methods/${path}/${path}.ts`)
    .filter(path => path !== false)

export default {
  input: ['./src/index.ts', ...getAllMethods()],
  output: [
    {
      dir: './dist',
      entryFileNames: '[name].js',
      format: 'cjs',
      exports: 'default',
      // esModule: false
      sourcemap: false
    },
    {
      dir: './dist',
      entryFileNames: '[name].mjs',
      format: 'es',
      sourcemap: false
      // esModule: false
    },
    // {
    //   file: pkg.browser,
    //   format: 'iife',
    //   name: 'str'
    // }
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    // resolve({ jsnext: true }),
    commonjs(),
    typescript({
      // rollupCommonJSResolveHack: true,
      clean: true,
      // useTsconfigDeclarationDir: false
    }),
    // terser(),
    copy({
      targets: [
        {
          src: './package.json',
          dest: './dist',
          transform: (contents) => {
            const p = JSON.parse(contents.toString('utf8'))
            p.main = p.main.replace('dist/', '')
            p.module = p.module.replace('dist/', '')
            p.browser = p.browser.replace('dist/', '')
            return JSON.stringify(p, null, 2)
          }
        },
        {
          src: './types',
          dest: './dist'
        }
      ]
    })
  ]
}


