import type { StorybookConfig } from '@storybook/react-webpack5'
const path = require('path')

const sassLoaders = [
  'style-loader',
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'sass-loader', options: { sourceMap: true } },
]

// Read more: https://storybook.js.org/docs/react/configure/overview
const storybookConfig: StorybookConfig = {
  stories: ['./README.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: '@storybook/react-webpack5',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: true,
    defaultName: 'Overview',
  },
  webpackFinal: async (config) => {
    if (config.module?.rules == null) {
      return config
    }
    config.module.rules.push({
      resolve: {
        alias: {
          '@style': path.resolve(__dirname, '../src/styles/'),
        },
      },
    })
    return config
  },
}

export default storybookConfig
