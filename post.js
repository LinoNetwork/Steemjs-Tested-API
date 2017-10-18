var steem=require('steem');

steem.broadcast.comment('5JHC8k5a5eLbxLsW5DCTe3JHrjGGzh13UQG8TKTvKxWMJLnHK92', '', 'test', 'vily', 'my-first-post', 'my first post', 'testing is fun', '{"tags":["test"],"app":"steemit/0.1","format":"markdown"}', function(err, result) {
  console.log(err, result);
});
