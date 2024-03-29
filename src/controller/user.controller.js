// 操作数据库
const userService = require("../service/user.service");

class UserController {
    async create(ctx, next) {
        // 1. 获取用户传递过来信息
        const user = ctx.request.body;
        // 2.验证客户端传来的user是否可以保存到数据库中

        // 2. 将user信息存储到数据库
        const result = await userService.create(user);
        // 3.查看存储的结果，告知前端
        ctx.body = {
            message: "success",
            data: result,
        };
    }
}

module.exports = new UserController();
