const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')
const config = require('./config/')

var compiler = Webpack(webpackConfig)

var server = new WebpackDevServer(compiler,{
    publicPath:config.publicPath,
    stats:{
        colors:true
    }
    // proxy:{
    //     '*':{

    //     }
    // }
})

server.listen(3000,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('http://localhost:3000'+config.publicPath)
})