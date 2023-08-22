const connection = require("../app/database");

class UserService {
    async create(user) {
        // 1. 获取到用户 user
        const { name, password } = user;
        // 2. 拼接statement
        console.log(name, password);
        const statement = "INSERT INTO `user` (name, password) VALUES (?, ?);";
        // connection.execute() 异步操作
        const result = await connection.execute(statement, [name, password]);
        console.log("数据库存储", result);
        return result;
    }

    async findUserByName(name) {
        const statement = "SELECT * FROM `user` WHERE name = ?";
        const [values] = await connection.execute(statement, [name]);
        return values;
    }

    async findUserByPassword() {}
}

module.exports = new UserService();
