/**
 * This Webpack config is used for bundling files for the demo.
 */

const webpack = require("webpack");
const path = require('path');

console.info('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV));

module.exports = {
    // devtool: "source-map",
    entry: {
        "typography": ["./src/typography.tsx"]
    },
    optimization: {
        minimize: true,
        usedExports: true
    },
    output: {
        path       : path.join(__dirname, '/dist'),
        filename   : '[name].js',
        chunkFilename   : '[name].chunk.js',
        libraryTarget: 'commonjs2',
        publicPath : ''
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']/*,
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }*/
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'styled-components': 'styled-components'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader']
            }
        ]
    }
};