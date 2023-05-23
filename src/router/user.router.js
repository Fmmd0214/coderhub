const KoaRouter = require("@koa/router");

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });


userRouter.post("/", (ctx, next) => {
    const user = ctx.request.body;
    console.log(user);


    ctx.body = "创建成功";
});

// 3. 导出路由
module.exports = userRouter;
