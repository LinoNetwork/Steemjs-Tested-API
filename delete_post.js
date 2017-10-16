var steem=require('steem');
steem.broadcast.deleteComment('5JsVFRbQEKJ8kDUdNQ5nhRC7CuPnWREzC2MzfqDSY89mQWbHAUc', 'vily', 'my-first-post', function(err, result) {
  console.log(err, result);
});
