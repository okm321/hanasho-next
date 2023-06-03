import type { StorybookConfig } from '@storybook/react-webpack5'

// Read more: https://storybook.js.org/docs/react/configure/overview
const storybookConfig: StorybookConfig = {
  stories: ['./README.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
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
}

export default storybookConfig
