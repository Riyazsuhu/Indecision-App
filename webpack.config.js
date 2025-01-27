const path=require('path')
const { Server } = require('http')

module.exports={
    entry:'./dev/index.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'eval-cheap-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public')
    }
}