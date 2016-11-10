var path = require('path');
module.exports = {
    entry: './src/App.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
              test: path.join(__dirname, 'src'),
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              } 
            }
        ]
    }
};