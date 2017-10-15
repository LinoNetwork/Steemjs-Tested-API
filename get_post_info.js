var steem=require('steem');

steem.api.getContent('lino.network', 'lino-paving-the-way-in-decentralizing-the-live-streaming-and-video-streaming-community', function(err, result) {
  console.log(err, result);
});
