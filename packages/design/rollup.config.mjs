import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import less from "rollup-plugin-less";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import replace from 'rollup-plugin-replace'

const env = process.env.NODE_ENV

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: 'dist/design.min.js',
      format: 'umd',
      name: 'lyrDesign',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
        '@yl-d/icon': "lyricon"
      },
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    resolve(),
    external(),
    commonjs(),
    less({
      output: "dist/design.min.css",
      option: {
        compress: true,
      },
    }),
    terser(),
    typescript({
      compilerOptions: {
        target: "esnext",
        module: "esnext",
        esModuleInterop: true,
        moduleResolution: "node",
        declaration: true,
        jsx: "react-jsx",
        strict: false,
        sourceMap: false,
        skipLibCheck: true,
        outDir: "./dist",
      },
      include: ["src/**/*"],
      exclude: ["node_modules/**/*"],
    }),
  ],
});
