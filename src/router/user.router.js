const KoaRouter = require("@koa/router");
const userController = require('../controller/user.controller')

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });


userRouter.post("/", userController.create);

// 3. 导出路由
module.exports = userRouter;
