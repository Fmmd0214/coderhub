const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const registerRouter = require('../router')

// 1.创建app
const app = new Koa()

// 2.对app使用中间件
app.use(bodyParser())
registerRouter(app)
// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())
// app.use(loginRouter.routes())
// app.use(loginRouter.allowedMethods())
// app.use(testRouter.routes())
// app.use(testRouter.allowedMethods())


// 3.将app导出
module.exports = app
 