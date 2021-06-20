const postcss = require("rollup-plugin-postcss");
const url = require('@rollup/plugin-url')
const svgr = require('@svgr/rollup').default;

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        minimize: true,
      })
    );
    config.plugins = [
      svgr({
        // configure however you like, this is just an example
        ref: true,
        memo: true,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            { removeAttrs: { attrs: 'g:(stroke|fill):((?!^none$).)*' } }
          ],
        },
      }),
      // Force the `url` plugin to emit files.
      url({ include: ['**/*.ttf', '**/*.woff', '**/*.eot', '**/*.svg'] }),
      ...config.plugins,
    ]
    return config;
  },
};
