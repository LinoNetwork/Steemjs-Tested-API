var steem=require('steem');
steem.broadcast.deleteComment('5JHC8k5a5eLbxLsW5DCTe3JHrjGGzh13UQG8TKTvKxWMJLnHK92', 'vily', 'my-first-post', function(err, result) {
  console.log(err, result);
});
