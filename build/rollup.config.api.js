import PLUGIN_CONFIG from './rollup.config.plugins'

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
