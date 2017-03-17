// CLinetID: 9212

// This Id identifies your application to the Stack Exchange API. Your application client id is not secret, and may be safely embeded in distributed binaries.
// Pass this as client_id in our OAuth 2.0 flow.
// Client Secret (reset) 5L0wOVu9zwm89gEspmcNAw((
// Pass this as client_secret in our OAuth 2.0 flow if your app uses the explicit path.
// This must be kept secret. Do not embed it in client side code or binaries you intend to distribute. If you need client side authentication, use the implicit OAuth 2.0 flow.
// Key Gvi3HHcYwsdm2K69OzxUnQ((

var stackitem = require('./StackOverflowOutputItem.js');
var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

function StackOverflowBar(){

}

StackOverflowBar.prototype.getStackAPI = function (string, number) {
  var filter = {
    q: string,
    answer: 1,
    tagged: 'ruby',
    sort: 'relevance',
    order: 'asc'
   };

  return new Promise(function(resolve, reject) {
    context.search.advanced(filter, function(err, results){
      if (err) throw err;
      var array = [];
      for (var i = 0; i < number; i++) {
        if (results.items[i]) {
          var item = [results.items[i].title, results.items[i].link];
          array.push(new stackitem(item[0], item[1]));
        };
      }
      resolve(array);
    });
  });
}

// var stack = new StackOverflowBar();
//
// var output = stack.getStackAPI("ruby array sort", 400);
//
// output.then(function(data){
//   console.log(data.length)
// })

module.exports = StackOverflowBar;
