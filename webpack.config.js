const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config/')
const IS_ENV = process.env.NODE_ENV == 'production'

var plugins = []
if(IS_ENV){
    plugins.push(new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV:"production"
        }
    }))
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress:{
            warning:false
        }
    }))
}

plugins.push(
    new HtmlWebpackPlugin({
        filename:'./index.html',
        template:'./src/template/index.html'
    })
)

module.exports={
    entry:['./src/main.js'],
    output:{
        publicPath:config.publicPath,
        path:path.resolve(__dirname+config.publicPath),
        filename:'[name].js?[hash]'
    },
    module:{
        loaders:[
            {
                test: /\.js(x)*$/,
                exclude:/^node_modules$/,
                loader:'babel'
            },{
                test:/\.vue$/,
                loader:'vue'
            },
            {
                test:/\.css/,
                exclude:/^node_modules$/,
                loader:`style-loader!css-loader!autoprefixer-loader?{browsers:['last 100 versions']}!`
            },{
                test:/\.less/,
                exclude:/^node_modules$/,
                loader:`style-loader!css-loader!autoprefixer-loader?{browsers:['last 100 versions']}!less-loader`
            },{
                test:/\.(png|jpg)$/,
                exclude:/^node_modules$/,
                loader:'url?limit=2000&name=[name].[ext]'
            },{
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins,
    resolve:{
        extensions:['', '.js', '.vue', '.jsx'],
        alias: {
            vue:'vue/dist/vue.js',
            store:path.resolve('src/store/')
        }
    },
    vue:{
        postcss:[
            require('autoprefixer')({
                browsers:['last 100 versions']
            })
        ]
    }
}