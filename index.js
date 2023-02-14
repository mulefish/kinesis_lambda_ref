exports.handler = function(event, context) {
    event.Records.forEach(function(record) {
        var payload = Buffer.from(record.kinesis.data, 'base64').toString('ascii');
        console.log('Payload:', payload);
    });
};