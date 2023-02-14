const cliSelect = require('cli-select');
const { yellow,
    green,
    cyan,
    blue,
    magenta
} = require('./x_log-colors.js')

const prompt = require('prompt');

let roleName;
let kinesisName;
let lambdaName;

prompt.start();
yellow("Required\n\t1: the RoleName\n\t2: the KinesisName\n\t3: the LambdaName")
prompt.get(['RoleName', 'KinesisName', 'LambdaName'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Received:');

    roleName = result.RoleName.trim()
    kinesisName = result.KinesisName.trim()
    lambdaName = result.LambdaName.trim()


    console.log('  RoleName: |' + roleName + "|");
    console.log('  KinesisName: |' + kinesisName + "|");
    console.log('  LambdaName: |' + lambdaName + "|");
});

function onErr(err) {
    console.log(err);
    return 1;
}


