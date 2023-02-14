// aws lambda get-function --function-name PEPS-TimeStream 
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function getArn(functionName) {
    const { stdout, stderr } = await exec(`aws lambda get-function --function-name ${functionName}`);
    if ( stderr ) {
        console.log("Ack! " + stderr )
    } else {
        const obj = JSON.parse(stdout)
        const arn = obj["Configuration"]["FunctionArn"]
        console.log("arn=" + arn )
    }
}
getArn('PEPS-TimeStream');

