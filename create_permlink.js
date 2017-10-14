var steem=require('steem');
const permlink = steem.formatter.commentPermlink('', 'cn');
process.stdout.write(permlink);
