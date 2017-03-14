import Koa from 'koa'
var app = new Koa();
//log工具
import logUtil from './utils/log_utils'
import configs from './config'
import co from 'co'

var config = process.env.NODE_ENV === 'production' ? configs.dev : configs.build

import onerror from 'koa-onerror'
import convert from 'koa-convert'

import logger from 'koa-logger'
import cors from 'koa-cors'
import controllers from './controllers/index.js'

const bodyparser = require('koa-bodyparser')()
const router = require('koa-router')({
    prefix:config.app.adminPath
})

import mongoose from 'mongoose'
mongoose.Promise = global.Promise

co(function*() {
  // 连接数据库
  mongoose.connect(config.mongoConfig.url,config.mongoConfig.opts)
  // 讲config注入中间件的ctx
  app.context.config = config
  // 设置头
  app.use(cors({
    maxAge: 7 * 24 * 60 * 60,
    // 7 days 预请求头有效期
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
    headers: 'Content-Type, Accept, Authorization'
  }))

  app.use(convert(bodyparser));
  app.use(convert(logger()))
  /**
   * error信息优化
   * */
  onerror(app)
  app.on('error',function(err,ctx){
      console.log(err)
      if((ctx.status === 404 && err.status === undefined) || err.status === 500){
        logUtil.logError(ctx, err, ms);
      }
  })
  // logger
  app.use(async (ctx, next) => {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    var ms;
    try {
      //开始进入到下一个中间件
      await next();
      ms = new Date() - start;
      //记录响应日志
      logUtil.logResponse(ctx, ms);
    } catch (error) {
      ms = new Date() - start;
      //记录异常日志
      logUtil.logError(ctx, error, ms);
    }
  });

  // 初始化路由
  yield controllers.init(router);
  app.use(router.routes());

  app.listen(config.app.port, ()=>{
    console.log(`listen ${config.app.port}`)
  });
}).catch(function(err) {
  console.log(err)
})
