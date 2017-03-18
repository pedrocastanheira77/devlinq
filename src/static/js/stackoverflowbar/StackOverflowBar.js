// CLinetID: 9212

// This Id identifies your application to the Stack Exchange API. Your application client id is not secret, and may be safely embeded in distributed binaries.
// Pass this as client_id in our OAuth 2.0 flow.
// Client Secret (reset) 5L0wOVu9zwm89gEspmcNAw((
// Pass this as client_secret in our OAuth 2.0 flow if your app uses the explicit path.
// This must be kept secret. Do not embed it in client side code or binaries you intend to distribute. If you need client side authentication, use the implicit OAuth 2.0 flow.
// Key Gvi3HHcYwsdm2K69OzxUnQ((

var stackitem = require('./StackOverflowOutputItem.js');
var request = require('request-promise');

function StackOverflowBar(){

}

StackOverflowBar.prototype.getStackAPI = function (string, number) {
  return new Promise(function(resolve, reject) {
    var reqUri = "http://api.stackexchange.com/2.2/search/advanced?order=asc&sort=relevance&q="+string+"&site=stackoverflow";
    request({
      uri: reqUri,
      json: true,
      gzip: true
    }).then(function(response) {
      var array = [];
          for (var i = 0; i < number; i++) {
            if (response.items[i]) {
              var item = [response.items[i].title, response.items[i].link];
              array.push(new stackitem(item[0], item[1]));
            };
          }
      resolve(array);
    });
  });
}
// 
// var stack = new StackOverflowBar();
//
// var output = stack.getStackAPI("ruby array sort", 5);
//
// output.then(function(data){
//   console.log(data)
// })

module.exports = StackOverflowBar;
