const connection = require('../app/database')

class UserService {
    async create(user) {
        // 1. 获取到用户 user
        const { name, password } = user
        console.log(name, password)

        // 2. 拼接statement
        const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'
        // connection.execute() 异步操作
        const result = await connection.execute(statement, [ name, password ])
        return result
    }
}

module.exports = new UserService()