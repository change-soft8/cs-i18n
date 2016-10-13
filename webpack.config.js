module.exports = {
    output: {
        library: 'CsI18n',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    },
    externals: {
        "react": "React"
    }
};
