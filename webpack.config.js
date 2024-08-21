// webpack.config.js
module.exports = (env, argv) => {
  const config = {
    entry: './src/CesiumTools.js',
    output: {
      filename: 'pl-cesium-tools.min.js',
      library: 'CesiumTools',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    mode: argv.mode || 'production',
    optimization: {
      minimize: true,
    },
  }

  if (argv.mode === 'development') {
    config.devtool = 'source-map'
  }

  return config
}
