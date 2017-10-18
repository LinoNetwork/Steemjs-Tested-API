var steem=require('steem');
const json = JSON.stringify(['reblog', {
  account: 'vily',
  author: 'sweetsssj',
  permlink: 'travel-with-me-91-the-national-chiang-kai-shek-memorial-hall-taipei'
}]);

steem.broadcast.customJson('5JHC8k5a5eLbxLsW5DCTe3JHrjGGzh13UQG8TKTvKxWMJLnHK92',[], ['vily'], 'follow', json, (err, result) => {
  console.log(err, result);
});
