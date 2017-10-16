var steem=require('steem');
var parentAuthor = 'ned';
var parentPermlink = 'a-selfie';
var commentPermlink = steem.formatter.commentPermlink(parentAuthor, parentPermlink);
console.log(commentPermlink);

