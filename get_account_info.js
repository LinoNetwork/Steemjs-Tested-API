var steem = require('steem');

steem.api.getAccounts(['cqf','wilsonwei777','zac2116'], function(err, result) {
	console.log(err, result);
});

