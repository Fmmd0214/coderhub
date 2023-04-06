const Koa = require("koa");
const KoaRouter = require("@koa/router");

const app = new Koa();

const userRouter = new KoaRouter();

app.listen(8000, () => {
    console.log("corder启动");
});
