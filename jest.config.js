/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  /**
   * Creating testing framework here
   */
  modulePathIgnorePatterns: ['<rootDir>/src/xunit/'],
};
