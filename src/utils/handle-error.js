const app = require("../app");

app.on("error", (error, ctx) => {
    let code = 0;
    let message = "";
    switch (error) {
        case "name_or_password_is_required":
            code = -1001;
            message = "用户名或密码不能为空，为必填项";
            break;
        case "name_is_alread_exists":
            code = -1002;
            message = "用户名被占用";
            break;
    }

    ctx.body = { code, message };
});
