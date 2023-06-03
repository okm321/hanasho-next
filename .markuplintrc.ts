import type { Config } from '@markuplint/ml-config'

const config: Config = {
  extends: ['markuplint:recommended'],
  parser: {
    '.tsx$': '@markuplint/jsx-parser',
  },
  specs: {
    '.tsx$': '@markuplint/react-spec',
  },
  excludeFiles: [
    './**/*.stories.tsx',
    './**/*.test.tsx',
    '**/node_modules/**',
    '**/dist/**',
  ],
}

export default config
