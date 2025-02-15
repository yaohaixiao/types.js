/**
 * jest.config.js - jest 配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2024.7.3
 */
module.exports = {
  moduleFileExtensions: ['js'],
  testMatch: ['**/tests/*.spec.(js)'],
  transform: {
    '^.+\\.js$': './node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  testTimeout: 5000,
  collectCoverage: true,
  coverageDirectory: 'report/coverage',
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'types.js 单测报告',
        outputPath: './report/unit-test/index.html',
        includeFailureMsg: true
      }
    ]
  ]
}
