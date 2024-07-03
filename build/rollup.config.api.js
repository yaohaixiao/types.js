import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

const PLUGIN_CONFIG = [
  nodeResolve({
    mainFields: ['module', 'jsnext', 'main', 'browser']
  }),
  commonjs(),
  terser()
]

export default [
  // For api docs IIFE
  {
    input: 'index.js',
    output: {
      name: 'Types',
      file: './docs/js/types.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'api/js/main.js',
    output: {
      name: 'outline',
      file: 'docs/js/docs.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  }
]
