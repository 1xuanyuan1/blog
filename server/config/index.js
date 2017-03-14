var path = require('path')

module.exports = {
  build: {

  },
  dev: {
    app: {
      name:'Duke',
      port: 3000,
      adminPath: '/api' // 后台路径
    },
    debug:false,
    env:'production',
    mongoConfig: { // 数据库配置
      url: 'mongodb://localhost:27017/blog',
      opts:{
        user:'',
        pass:''
      }
    }
  }
}
