module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/lib/(.*)$': '<rootDir>/lib/$1',
      '^@/pages/(.*)$': '<rootDir>/pages/$1',
      '^@/styles/(.*)$': '<rootDir>/styles/$1',
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  };
  