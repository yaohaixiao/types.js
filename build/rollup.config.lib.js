import PLUGIN_CONFIG from './rollup.config.plugins'
import METHODS from '../utils/methods'

const METHOD_CONFIGS = (() => {
  const CONFIGS = []

  Object.keys(METHODS).forEach((method) => {
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
  ...METHOD_CONFIGS
]
