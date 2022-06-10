module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  core: {
    builder: 'webpack4',
  },
  webpackFinal: async (config) => {
    // solution to load svg as a component from: https://github.com/boopathi/react-svg-loader/issues/197
    // Replaces the webpack rule that loads SVGs as static files to leave out SVG files for us to handle
    const indexOfRuleToRemove = config.module.rules.findIndex(rule => rule.test && rule.test.toString().includes('svg'))
    config.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false
      }
    })

    config.module.rules.push(
      {
        test: /.svg$/,
        use: ['@svgr/webpack'],
      },

    )
    return config
  },
};
