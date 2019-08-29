module.exports = {
  preset: 'ts-jest', // 为了在测试中使用 TypeScript 文件
  setupFiles: ['<rootDir>/test/jest.init.js'],
  moduleFileExtensions: ['js', 'vue', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|ts|tsx)$': '<rootDir>/test/jest.transform.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'], // 每当你想要确保你的UI不会有意外的改变，快照测试是非常有用的工具
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx,vue}',
    '!**/custom-icons/**',
    '!**/demo/**',
    '!**/components/locale/**',
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './test/coverage'
};
