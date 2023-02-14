const WebSocket = require('ws');

const ws = new WebSocket("wss://708q4jf437.execute-api.us-east-1.amazonaws.com/v1");
let t1;
ws.on('open', () => {
  console.log('WebSocket connection established');
  const data = {
    alpha: 'Goat',
    bravo: 'Penny',
    charlie: 'Fish'
  };

  const request = {
    Records: [
      {
        Data: JSON.stringify(data),
        PartitionKey: '1'
      }
    ],
    StreamName: 'lambda-stream'
  };
  t1 = new Date().getTime() 
  ws.send(JSON.stringify(request));
});

ws.on('message', (data) => {
    const ms = new Date().getTime() - t1
    console.log(`In ms ${ms} got back: ${data}`);
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});