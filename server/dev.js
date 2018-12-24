const Koa = require('koa')
const koaRouter = require('koa-router')
const json = require('koa-json')
const jwt = require('koa-jwt')
const logger = require('koa-logger') // 引入各种依赖
const apiRouter = require('./routes/api')
const authRouter = require('./routes/auth')
const historyApiFallback = require('koa2-history-api-fallback')
const path = require('path')
const serve = require('koa-static')
const koaBodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa()
const router = koaRouter()
app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return false
    }
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
app.use(koaBodyparser())
app.use(json())
app.use(logger())

app.use(function* (next) {
  let start = new Date()
  yield next
  let ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms) // 显示执行的时间
})

app.use(async function (ctx, next) { //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err
    }
  }
})

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

router.use('/auth', authRouter.routes())
router.use('/api', jwt({secret: 'vue-koa-demo'}), apiRouter.routes()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(router.routes()) // 将路由规则挂载到Koa上。

app.use(historyApiFallback())
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录

app.listen(8889, () => {
  console.log('Koa is listening in 8889')
})

module.exports = app
