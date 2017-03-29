var ExtractTextPlugin = require('extract-text-webpack-plugin')

var loaders = {}
if (process.env.NODE_ENV === 'production') {
    loaders = {
        css: 'vue-style-loader!css-loader!postcss-loader',
        scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader'
    }
} else {
    loaders = {
        css: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: 'css-loader!postcss-loader'}),
        scss: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: 'css-loader!postcss-loader!sass-loader'})
    }
}
module.exports = {
    loaders: loaders
}
