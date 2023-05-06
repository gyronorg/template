import { defineConfig } from "vite";
import { babelViteJsx } from "@gyron/babel-plugin-jsx";
import path from "path";

export default ({ mode }) => {
  return defineConfig({
    define: {
      __DEV__: mode === "development",
      __WARN__: true,
    },
    resolve: {
      alias: [
        {
          find: /@\/(.*)/,
          replacement: path.join(__dirname, "./src/$1"),
        },
      ],
    },
    plugins: [babelViteJsx({ hmr: mode === "development" })],
  });
};
