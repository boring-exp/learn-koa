import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8090 });

wss.on('connection', function connection(/** 客户端实例 */ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
  setTimeout(() => {
    ws.send('something');
  }, 5000)
});