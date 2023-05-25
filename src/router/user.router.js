const KoaRouter = require("@koa/router");
// 处理函数
const userController = require("../controller/user.controller");
// 验证逻辑
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

// 后面可以传入多个中间件
userRouter.post("/", verifyUser, handlePassword, userController.create);

// 3. 导出路由
module.exports = userRouter;
