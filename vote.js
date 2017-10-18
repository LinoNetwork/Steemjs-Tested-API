var steem=require('steem');
steem.broadcast.vote('5JHC8k5a5eLbxLsW5DCTe3JHrjGGzh13UQG8TKTvKxWMJLnHK92', 'vily', 'lasunsets', 'delicious-peruvian-food-for-lunch', 5000, function(err, result) {
  console.log(err, result);
});//50.00% Each vote costs voting power proportional to 50.00%
