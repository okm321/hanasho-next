import type { StorybookConfig } from '@storybook/nextjs'
const path = require('path')

const config: StorybookConfig = {
  stories: ['./README.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public/'],
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
  framework: {
    name: '@storybook/nextjs',
    options: {},
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
          '/fonts': path.resolve(__dirname, '../public/fonts/'),
          '@style': path.resolve(__dirname, '../src/styles/'),
        },
      },
    })
    return config
  },
}
export default config
