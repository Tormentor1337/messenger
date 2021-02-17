const path = require('path');

const merge = require('webpack-merge').merge;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js?[contenthash]'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'ts-loader']
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/static/index.html'
		}),
		// new CopyPlugin({
		// 	patterns: [
		// 		{
		// 			from: 'src/static',
		// 			to: '',
		// 			globOptions: {
		// 				ignore: ['**/index.html']
		// 			}
		// 		}
		// 	],
		// 	options: {
		// 		concurrency: 100,
		// 	},
		// })
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
};

const devConfig = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		open: true,
		host: '0.0.0.0',
		historyApiFallback: {
			index: 'index.html'
		}
	},
};

const prodConfig = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css?[contenthash]'
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin()
		]
	}
};

module.exports = isProduction
	? merge(config, prodConfig)
	: merge(config, devConfig);