const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    NAME_IS_NOT_EXISTS,
    PASSWORD_IS_INCORRECT,
    UNAUTHORIZATION
} = require("../config/error.js")
const userService = require("../service/user.service.js");
const {md5Password} = require("../utils/md5-password.js");
const jwt = require('jsonwebtoken')
const {PRIVATE_KEY, PUBLIC_KEY} = require('../config/secret.js')

const verifyLogin = async (ctx, next) => {
    const {name, password} = ctx.request.body
    // 1 判断用户名|密码是否为空
    if (!name || !password) {
        console.log(NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    }
    // 2 判断用户名是否已经存在
    const users = await userService.findUserByName(name)
    const user = users[0]
    if (!user) {
        return ctx.app.emit('error', NAME_IS_NOT_EXISTS, ctx)
    }
    // 3 判断密码是否正确
    if (user.PASSWORD !== md5Password(password)) {
        return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
    }
    // 4 将user对象保存在ctx中
    ctx.user = user
    await next()
}

const verifyAuth = async (ctx, next) => {
    // 获取token
    const authorization = ctx.headers.authorization
    const token = authorization.replace('Bearer ', '')

    // 验证token
    try {
        // 1. 获取token中的数据
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })

        // 2. 将token的信息保留
        ctx.user = result

        // 3. 执行下一个中间件
        await next()

    } catch (err) {
        return ctx.app.emit('error', UNAUTHORIZATION, ctx)
    }
}

module.exports = {
    verifyLogin,
    verifyAuth
}