module.exports = {
  // preset: 'jest-expo',  // 暂时禁用，有兼容性问题
  testEnvironment: 'node',
  // 转换规则：处理 node_modules 中需要转译的包
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  // 收集测试覆盖率的文件
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
    '!src/types/**/*',
  ],
  // 测试环境设置
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // 测试文件匹配规则
  testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx|js)'],
  // 模块文件扩展名
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // Babel 转换配置
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.js' }],
  },
  // 模块名映射
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
