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
  // For full functions module
  {
    input: 'types.js',
    output: {
      name: 'Types',
      file: './types.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'lang/index.js',
    output: {
      name: 'Types',
      file: './types.core.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'number/index.js',
    output: {
      name: 'Types',
      file: './types.number.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'object/index.js',
    output: {
      name: 'Types',
      file: './types.object.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'types.js',
    output: {
      name: 'Types',
      file: './docs/js/types.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  }
]
