const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
        publicPath: "/", 
    },
    target: "web",
    devServer: {
    port: 3000,
    static: {
        directory: path.join(__dirname, "public"),
        publicPath: '/', // Forces the server to serve static assets from the root
    },
    hot: true,
    open: true,
    liveReload: true,
    historyApiFallback: true, // Use boolean true instead of { index: "/" }
},


    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
        ]
    }
};