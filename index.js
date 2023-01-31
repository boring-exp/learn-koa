// 如果是类或者构造函数，首字母大写
const Koa = require('koa')
const KoaMount = require('koa-mount')
const KoaStatic = require('koa-static')
// 创建koa应用
const app = new Koa();

// 文件
const middleStatic = KoaStatic('./static', {
    setHeaders: function (resp) {
        // 设置http响应报文key-value，报文的数据保存为附件
        resp.setHeader('content-disposition', 'attachment')
    }
})

// 网站
const mainSite = KoaStatic('./website')

// 1.开发一个静态文件服务器
app.use(KoaMount('/download', middleStatic))
app.use(mainSite)

// 启动服务器，监听端口
app.listen(3000, 'localhost', () => {
    console.log('server is listening on http://localhost:3000')
})