var steem=require('steem');
steem.broadcast.vote('5K2yXgkN22BhBnD6oHtTaQz2TAeAT2akyVfnRQjyHmHdVGfj6PC', 'lino.network', 'lasunsets', 'delicious-peruvian-food-for-lunch', 5000, function(err, result) {
  console.log(err, result);
});//50.00% Each vote costs voting power proportional to 50.00%
