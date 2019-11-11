const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './dev/script.js',
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'bundle.js'
	},
	mode: 'development',
	watch: true,
	devServer: {
		contentBase: path.resolve(__dirname, 'site'),
		host: 'localhost',
		port: 9090,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},

			{
				test: /\.css$/,
				use: [MiniCSSExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]			
			}
		]		
	},
	plugins: [        
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        })		
	]
}