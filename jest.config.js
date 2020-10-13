module.exports = {
  roots: [
    '<rootDir>',
  ],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  testURL: 'http://localhost/3000',
  clearMocks: true,
};
