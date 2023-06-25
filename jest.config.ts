import type { Config } from '@jest/types'
import nextJest from 'next/jest'

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~mocks/(.*)$': '<rootDir>/mocks/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [],
  collectCoverage: false,
  testMatch: ['**/*.test.[jt]s?(x)'],
  verbose: true,
}

const createJestConfig = nextJest({
  dir: './',
})

export default createJestConfig(config)
