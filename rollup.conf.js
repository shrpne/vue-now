import {babel} from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';


export default [
    {
        input: 'src/index.js',
        plugins: [
            babel(),
        ],
        output: [
            {
                format: 'umd',
                file: 'dist/vue-now.js',
                name: 'VueNow',
            },
            // {
            //     format: 'es',
            //     file: 'dist/vue-now.esm.js',
            // },
        ],
    },
    {
        input: 'src/index.js',
        plugins: [
            babel(),
            terser(),
        ],
        output: [
            {
                format: 'umd',
                file: 'dist/vue-now.min.js',
                name: 'VueNow',
            }
        ]
    }
]
