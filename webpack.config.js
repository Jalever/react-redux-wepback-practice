const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./src/index.jsx"
	},
	output: {
		filename: "[name].[hash].js",
		path: path.resolve(__dirname, "./dist")
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					"babel-loader"
				]
			}
		]
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname,"dist"),
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			title: "react-redux-webpack-practice"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		}
	}
};





















