import jsx from 'rollup-plugin-jsx'
import resolve from '@rollup/plugin-node-resolve';

// 設定はここを参照。カスタマイズしていく
// https://rollupjs.org/guide/en/#installation

export default {
  input:'src/index.ts',
  output: [
    {
      file: 'dist/main.js',
      format: 'cjs',
    },
  ],
  dest: 'build/app.js',
  entry: 'src/index.js',
  plugins: [
    jsx( {factory: 'React.createElement'} ),
    resolve({
      moduleDirectories: ['node_modules']
    })
  ],
  sourceMap: true
}
