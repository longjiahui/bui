import vuePlugin from 'rollup-plugin-vue'
import scssPlugin from 'rollup-plugin-scss'

export default {
    plugins: [
        vuePlugin(),
        scssPlugin(),
    ],
    input: 'src/main.js',
    output: {
        name: 'bui',
        file: 'dist/bundle.js',
        // format: 'umd',
        globals: {
            vue: "vue"
        }
    },
    external: ['vue'],
}