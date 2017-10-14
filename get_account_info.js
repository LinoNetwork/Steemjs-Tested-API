var steem = require('steem');

steem.api.getAccounts(['cqf','wilsonwei777'], function(err, result) {
	console.log(err, result);
});
