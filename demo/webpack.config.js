var path = require('path')
var jsxCompile = require('webpack-compilejsx');
const port = process.env.PORT || 3000

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
	output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
	},
    plugins: [jsxCompile],
	module: {
		rules: [
			{
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: "babel-loader"
			},
			{
                test: /\.css/,
                use: ['style-loader', 'css-loader']
			},
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        transportMode: 'ws',
        injectClient: false
      },
    devtool: 'inline-source-map'
}