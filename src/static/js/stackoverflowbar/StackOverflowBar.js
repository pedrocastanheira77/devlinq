// CLinetID: 9212

// This Id identifies your application to the Stack Exchange API. Your application client id is not secret, and may be safely embeded in distributed binaries.
//
// Pass this as client_id in our OAuth 2.0 flow.
//
// Client Secret (reset) 5L0wOVu9zwm89gEspmcNAw((
//
// Pass this as client_secret in our OAuth 2.0 flow if your app uses the explicit path.
//
// This must be kept secret. Do not embed it in client side code or binaries you intend to distribute. If you need client side authentication, use the implicit OAuth 2.0 flow.
//
// Key Gvi3HHcYwsdm2K69OzxUnQ((
//
//

var stackexchange = require('stackexchange');
var stackitem = require('./StackOverflowOutputItem.js')
var options = { version: 2.2 };
var context = new stackexchange(options);
var wait=require('wait.for');

function StackOverflowBar(){

}

var stack = new StackOverflowBar();

StackOverflowBar.prototype.getStackAPI = function (string, callback) {
  var filter = {
    q: string,
    answer: 1,
    tagged: 'ruby',
    sort: 'relevance',
    order: 'asc'
   };

  var item;

  return new Promise(function(resolve, reject) {
    context.search.advanced(filter, function(err, results){
      if (err) throw err;
      item0 = [results.items[0].title,results.items[0].link];
      item1 = [results.items[1].title,results.items[1].link];
      item2 = [results.items[2].title,results.items[2].link];
      item3 = [results.items[3].title,results.items[3].link];
      item4 = [results.items[4].title,results.items[4].link];
      resolve([item0, item1, item2, item3, item4]);
    });
  });
}

var output = stack.getStackAPI("ruby array sort");

output.then(function(data){
  console.log(data)
})
