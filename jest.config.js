module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': 'esbuild-jest',
  },
  runner: 'groups',
  testEnvironment: 'node',
  testRegex: 'src(/tests/|/.*/tests/).*\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/.config/testing/setup.ts'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
