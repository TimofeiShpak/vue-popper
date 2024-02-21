import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    file: isProduction ? 'dist/vue-popper.min.js' : 'dist/vue-popper.js',
    format: 'umd',
    name: 'VuePopper',
  },
  plugins: [
    vue({
      template: {},
      css: false,
    }),
    postcss({
      extract: !isProduction ? 'vue-popper.css' : 'vue-popper.min.css',
      minimize: isProduction,
    }),
    babel({
      runtimeHelpers: true,
      externalHelpers: false,
    }),
    (isProduction && terser())
  ],
};
