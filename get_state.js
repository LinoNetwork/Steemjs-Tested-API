var steem=require('steem');

steem.api.getState('', function(err, result) {
	console.log(err, result);
});
