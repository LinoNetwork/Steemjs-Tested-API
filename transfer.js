var steem=require('steem');

//steem.broadcast.transfer('5JbwCihybWpUK5WbCZ23NhRaRWXVmENJY5DXPzkBdoxiRwFnW5M', 'lino.network', 'wilsonwei777', '1.000000 VESTS', 'hello, wilson', function(err, result) {
//  console.log(err, result);
//});//Fail as it is not allowed

steem.broadcast.transfer('5JbwCihybWpUK5WbCZ23NhRaRWXVmENJY5DXPzkBdoxiRwFnW5M', 'lino.network', 'wilsonwei777', '0.001 STEEM', 'hello, wilson', function(err, result) {
  console.log(err, result);
});

//steem.broadcast.transfer('5JbwCihybWpUK5WbCZ23NhRaRWXVmENJY5DXPzkBdoxiRwFnW5M', 'lino.network', 'wilsonwei777', '0.001 SBD', 'hello, wilson', function(err, result) {
//  console.log(err, result);
//});

