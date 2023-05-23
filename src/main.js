// 1. 导入app
const app = require("./app");
const { SERVER_PORT } = require("./config/server");

// 2. 启动
app.listen(SERVER_PORT, () => {
    console.log(`启动服务器成功: http://localhost:${SERVER_PORT}`);
});
