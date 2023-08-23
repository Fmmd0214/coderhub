/**
 * 测试接口
 * */
const KoaRouter = require("@koa/router");
const {verifyAuth} = require('../middleware/login.middleware.js')

const testRouter = new KoaRouter({prefix: "/test"});

testRouter.get("/", verifyAuth, async (ctx, next) => {
    ctx.body = '测试接口'
})


module.exports = testRouter