import jsx from 'rollup-plugin-jsx'
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import styles from "rollup-plugin-styles";
// import acornJsx from 'acorn-jsx';
import commonjs from '@rollup/plugin-commonjs';

// 設定はここを参照。カスタマイズしていく
// https://rollupjs.org/guide/en/#installation

export default {
  input:'src/index.ts',
  // output形式をいくつか試す
  output: [
    {
      file: 'dist/cjs/main.js',
      format: 'cjs',
    },
    {
      file: 'dist/ems/main.esm.js',
      format: 'esm',
    },
  ],
  // acornInjectPlugins: [acornJsx()],
  plugins: [
    jsx( {factory: 'React.createElement'} ),
    resolve({
      moduleDirectories: ['node_modules']
    }),
    typescript({
        exclude: ["src/stories/*","**/__tests__", "**/*.test.ts"],
        compilerOptions: { jsx: 'preserve' }
      }),
    styles(),
    commonjs(),
  ],
}
