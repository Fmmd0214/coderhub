const {PRIVATE_KEY, PUBLIC_KEY} = require('../config/secret.js')
const {UNAUTHORIZATION} = require('../config/error.js')
const jwt = require('jsonwebtoken')

class loginController {
    sign(ctx, next) {
        const {id, name} = ctx.user

        let token
        try {
            token = jwt.sign({id, name}, PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 24 * 60 * 60
            })
        } catch (err) {
            console.log(err);
        }

        ctx.body = {
            code: 0,
            data: {id, name, token}
        }
    }
}

module.exports = new loginController()