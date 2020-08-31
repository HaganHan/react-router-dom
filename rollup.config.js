// import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2'
import { DEFAULT_EXTENSIONS } from '@babel/core'

export default [
  {
    input: 'src/react-router-dom/index.ts',
    output: [
      {
        file: 'dist/bundle.min.js',
        format: 'umd',
        name: 'react-router-dom'
      }
    ],
    plugins: [
      // resolve(),
      typescript({
        tsconfigDefaults: { compilerOptions: { declaration: true } },
        tsconfig: 'tsconfig.json',
        tsconfigOverride: { compilerOptions: { declaration: false } }
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: [
          ...DEFAULT_EXTENSIONS,
          '.ts',
          '.tsx'
        ]
      }),
      uglify()
    ]
  },
  {
    input: 'src/react-router-dom/index.ts',
    output: [
      {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'react-router-dom'
      }
    ],
    plugins: [
      typescript()
      // resolve()
    ]
  }
]
