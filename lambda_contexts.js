const aws = require('aws-sdk');

exports.handler = (event, context, callback) => {
    console.log('context use');
    console.log('value1=', event.key1)
    console.log('value1=', event.key2)
    console.log('value1=', event.key3)
    console.log('remaining time=', context.getRemainingTimeInMillis());
    console.log('functionName=', context.functionName);
    console.log('awsRequestId', context.awsRequestId);
    console.log('logGroupName', context.logGroupName);
    console.log('logStramName', context.logStreamName);

    switch(event.contextCallbackOption){
        case "no":
            setTimeout(function(){
                console.log('limit time 30s!!!')
            }, 30000);
            break;
        case "yes":
            console.log("callbackWaitsForEmptyEventLoop 가 설정되지 않으면 setTimeOut()을 기다리지 않는다.")
            setTimeout(function(){
                console.log('limit time 30s!!!')
            }, 30000);
            context.callbackWaitsForEmptyEventLoop = false;
            break;
        default:
            console.log('default code block')
    }
    callback(null, 'Goodbye Lambda~!')
}