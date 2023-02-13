const AWS = require('aws-sdk');
const STEAM_NAME = "lambda-stream"
AWS.config.update({
  region: 'us-east-1'
});
const words = ["blue", "mud", "dirt", "Earth", "warm", "chilly", "moon", "Jupiter", "arrow"] 
const getPayload = () => { 
    const a = words[Math.floor(Math.random()*words.length)];
    const b = words[Math.floor(Math.random()*words.length)];
    const c = words[Math.floor(Math.random()*words.length)];
    return `${a} ${b} ${c}` 
}

const kinesis = new AWS.Kinesis({apiVersion: '2013-12-02'});
const data = {
  "alpha": getPayload(),
  "bravo": getPayload(),
  "charlie": getPayload()
};
console.log("PUT THIS: " + JSON.stringify(data))
kinesis.putRecord({
  StreamName: STEAM_NAME,
  Data: JSON.stringify(data),
  PartitionKey: '1'
}, (err, data) => {
  if (err) {
    console.error("Error putting record to stream: ", err);
  } else {
    console.log("Successfully put record to stream: ", data);
  }
});