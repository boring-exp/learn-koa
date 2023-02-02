const KoaRouter = require('koa-router')
const loginCtrl = require('../controller/login/index')
const uploadCtrl = require('../controller/upload/index')

const router = new KoaRouter({
    prefix: '/api'
});

// 写路由规则
router.post('/login', loginCtrl)

// 上传文件
router.post('/upload', uploadCtrl)

module.exports = {
    router
}