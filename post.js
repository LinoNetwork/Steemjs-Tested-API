var steem=require('steem');

steem.broadcast.comment('5JsVFRbQEKJ8kDUdNQ5nhRC7CuPnWREzC2MzfqDSY89mQWbHAUc', '', 'test', 'vily', 'my-first-post', 'my first post', 'testing is fun', '{"tags":["test"],"app":"steemit/0.1","format":"markdown"}', function(err, result) {
  console.log(err, result);
});
