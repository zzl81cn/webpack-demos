/**
 * Created by zhouzilong on 2016/8/5.
 */
module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(png|jpg)$/, loader: 'url-loader?limited=8192'}
        ]
    }
};