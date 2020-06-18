const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        'main': ['./src/main.ts', './src/main.scss']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/, use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })]
};
