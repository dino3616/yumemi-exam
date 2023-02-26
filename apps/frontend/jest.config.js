/** @type {import('jest').Config} */
module.exports = require('@yumemi-exam/jest/jest.nextjs')({
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
});
