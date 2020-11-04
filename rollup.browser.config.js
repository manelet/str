import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from "rollup-plugin-terser"

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.browser,
      format: 'iife',
      name: 'str'
    }
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
    terser()
  ]
}


