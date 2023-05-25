const mysql2 = require("mysql2");

// 1.创建连接池
const connectionPool = mysql2.createPool({
    host: "localhost",
    port: 3306,
    database: "coderhub",
    user: "root",
    password: "123456",
    connectionLimit: 5,
});

// 2. 获取连接是否成功
connectionPool.getConnection((err, connection) => {
    if (err) {
        console.log("获取连接失败", err);
        return;
    }

    connection.connect((err) => {
        if (err) {
            console.log("和数据库交互失败", err);
        } else {
            console.log("数据库连接成功，可以进行操作");
        }
    });
});

// 3. 获取连接池中的连接对象(promise)
const connection = connectionPool.promise();

module.exports = connection;
