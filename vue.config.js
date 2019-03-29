module.exports = {
    devServer: {
        proxy: {
            '/api':{
                // target:'http://dev.irisplorer.io',
                // target:'http://47.104.155.125:30201/',
                target:'http://35.236.146.181:8080',
                secure:false,
            }
        }
    }
};