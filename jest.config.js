module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  globals: {
    __DEV__: true,
    __WARN__: false,
    "ts-jest": {
      babelConfig: {
        presets: [["@babel/preset-env"]],
        plugins: [require("@gyron/babel-plugin-jsx")],
      },
    },
  },
};
