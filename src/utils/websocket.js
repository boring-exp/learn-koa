const { WebSocketServer } = require('ws');

const clients = {
  ins: null
}
// server初始化
function initWSserver() {
  const wss = new WebSocketServer({ port: 8090 });

  wss.on('connection', function connection(/** 客户端实例 */ws) {
    console.log('有新的客户端连上来了')
    // 保持最新
    clients.ins = ws;
  });
}

// 发送消息函数
function send(params) {
  if (clients.ins) {
    clients.ins.send(JSON.stringify(params))
  }
}

module.exports = {
  send,
  initWSserver
}

