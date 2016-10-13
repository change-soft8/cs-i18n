module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    },
    externals: {
        'CsI18n': 'CsI18n',
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
