var steem=require('steem');

steem.api.getState('/trends/bitcoin', function(err, result) {
	console.log(err, result);
});
