const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        navigation: './src/entry/navigation.entry.js',
        mainContent: './src/entry/mainContent.entry.js',
        index: './src/entry/index.entry.js',
        find: './src/entry/find.entry.js',
        login: './src/entry/login.entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),  //산출물이 위치할 경로
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};