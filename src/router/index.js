const KoaRouter = require('koa-router')
const loginCtrl = require('../controller/login/index')
const uploadCtrl = require('../controller/upload/index')
const uploadMultiCtrl = require('../controller/upload/upload-mul')
const addUserCtrl = require('../controller/user/index')
const {send} = require('../utils/websocket')

const router = new KoaRouter({
    prefix: '/api'
});

// 写路由规则
router.post('/login', loginCtrl)
router.post('/user/add', addUserCtrl)

// 上传文件
router.post('/upload', uploadCtrl)
router.post('/upload/multi', uploadMultiCtrl)
router.get('/third/event', async (ctx) => {
    const eventType = ctx.request.query.type;
    console.log(eventType)
    send({name: '后端推送的数据'})
    // TODO: 给前端页面做推送
    // 1. HTTP
    // 2. WebSockt
    //    制订一个通信标准（事件类型名称，事件参数） 
    ctx.body = 'success'
})

module.exports = {
    router
}