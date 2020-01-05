const path = require('path');

module.exports = {
    entry:{
        home:'./src/home.js',
        about:'./src/about.js'
    },
    output:{
        path:path.resolve(process.cwd(),"dist"),
        filename:'[name].[chunkHash:6].js'
    }
}