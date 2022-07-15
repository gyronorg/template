const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('../../tsconfig.json')

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>../../',
  }),
  globals: {
    __DEV__: true,
    __WARN__: false,
    'ts-jest': {
      babelConfig: {
        presets: [['@babel/preset-env']],
        plugins: [require('@gyron/babel-plugin-jsx')],
      },
    },
  },
}
