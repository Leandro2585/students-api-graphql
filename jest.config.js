const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main',
    '!<rootDir>/src/**/index.ts'
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths,
    { prefix: '<rootDir>/src/' }
  ),
  testMatch: ['**/*.spec.ts'],
  roots: [
    '<rootDir/src',
    '<rootDir/tests'
  ],
  transform: {
    '\\.ts': 'ts-jest'
  }
}
