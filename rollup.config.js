import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/js/main.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [commonjs()]
};
