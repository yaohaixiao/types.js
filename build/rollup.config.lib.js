import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import METHODS from '../enum/methods'

const PLUGIN_CONFIG = [
  nodeResolve({
    mainFields: [
      'module',
      'jsnext',
      'main',
      'browser'
    ]
  }),
  commonjs(),
  terser()
]

const PER_METHOD_CONFIG = (() => {
  const CONFIGS = []

  METHODS.forEach((method) => {
    CONFIGS.push({
      input: `${method}.js`,
      output: {
        name: method,
        file: `./lib/${method}.js`,
        format: 'umd',
        sourcemap: true
      },
      plugins: PLUGIN_CONFIG
    })
  })

  return CONFIGS
})()

export default [
  // For full functions module
  {
    input: 'index.js',
    output: {
      name: 'Types',
      file: './lib/types.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  ...PER_METHOD_CONFIG
]
