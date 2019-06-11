import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-buble';

export const outDir = 'src/legacy';

const plugins = () => {
  return [
    // Allow json resolution
    json(),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),

    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    babel({
      transforms: { dangerousTaggedTemplateString: true }
    }),

    sourceMaps()
  ];
};

export const polyfills = {
  input: 'src/polyfills.js',
  output: { file: `./${outDir}/polyfills.js`, format: 'cjs', sourcemap: false },
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  plugins: plugins()
};

export const bundleES5 = {
  input: 'src/app.js',
  output: { file: `./${outDir}/app.js`, format: 'cjs', sourcemap: false },
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  plugins: plugins()
};

export default commandLineArgs => {
  return [
    polyfills,
    bundleES5
  ];
}
