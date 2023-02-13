const WebSocket = require('ws');

const ws = new WebSocket('');

ws.on('open', () => {
  console.log('WebSocket connection established');
  const data = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
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

  ws.send(JSON.stringify(request));
});

ws.on('message', (data) => {
  console.log(`Received response: ${data}`);
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});