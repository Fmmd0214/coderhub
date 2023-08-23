const fs = require('fs')

function registerRouter(app) {
    // 1. 读取当前文件夹下的所有文件
    /***
     * fs.readdirSync(path[, options])
     * 用于同步读取目录的内容。返回一个不包括 '.' 和 '..' 的文件名的数组。
     * 返回一个数组
     *
     * __dirname
     * 用来动态捕获当前文件模块所属目录的接对路径
     */
    const files = fs.readdirSync(__dirname)

    for (let file of files) {
        if (!file.endsWith('.router.js')) continue
        const router = require(`./${file}`)
        app.use(router.routes())
        app.use(router.allowedMethods())
    }
}

module.exports = registerRouter