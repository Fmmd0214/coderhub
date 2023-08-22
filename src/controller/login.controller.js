const { PRIVATE_KEY, PUBLIC_KEY } = require('../config/secret.js')
const { UNAUTHORIZATION } = require('../config/error.js')
const jwt = require('jsonwebtoken')
class loginController {
    sign(ctx, next) {
        const { id, name } = ctx.user

        let token
        try {
            token = jwt.sign({ id, name }, PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 24 * 60 * 60
            })
        } catch (err) {
            console.log(err);
        }

        ctx.body = {
            code: 0, 
            data: { id, name, token }
        }
    }

    async test (ctx, next) {
        console.log('test');
        // 获取token
        const authorization = ctx.headers.authorization
        const token = authorization.replace('Bearer ', '')
        console.log(token);

        // 验证token
        try {
            const result = jwt.verify(token, PUBLIC_KEY, {
                algorithms: ['RS256']
            })
            console.log(result);
            ctx.body = '可以使用该接口~'
        } catch (err) {
            return ctx.app.emit('error', UNAUTHORIZATION, ctx)
        }   

        await next()
    }
}

module.exports = new loginController()