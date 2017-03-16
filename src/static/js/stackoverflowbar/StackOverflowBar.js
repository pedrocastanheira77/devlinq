// CLinetID: 9212
//
// 9212
// This Id identifies your application to the Stack Exchange API. Your application client id is not secret, and may be safely embeded in distributed binaries.
//
// Pass this as client_id in our OAuth 2.0 flow.
//
// Client Secret (reset)
//
// 5L0wOVu9zwm89gEspmcNAw((
//
// Pass this as client_secret in our OAuth 2.0 flow if your app uses the explicit path.
//
// This must be kept secret. Do not embed it in client side code or binaries you intend to distribute. If you need client side authentication, use the implicit OAuth 2.0 flow.
//
// Key
//
// // Gvi3HHcYwsdm2K69OzxUnQ((
//
//
var sw = require('selenium-webdriver');
var chromeOptions = sw.Capabilities.chrome();
// console.log(chromeOptions)


// var chromeOptions = sw.Capabilities.chrome();
// chromeOptions.set("chromeOptions",  {"args": ["--no-startup-window"]});
// var driver = new sw.Builder()
//     .forBrowser('chrome')
//     // .withCapabilities(chromeOptions)
//     .build();
//
//
//
// driver.get('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow')
//   .then(function(){
//     driver.findElement(sw.By.tagName('body')).then(function(page){
//       page.getText().then(function(data){
//         var parseJson = require('parse-json');
//         console.log(JSON.parse(data).items[0].link)
//       })
//     })
// })


var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = {
 q: 'ruby array sort reverse',
 answer: 1,
 tagged: 'ruby',
 sort: 'relevance',
 order: 'asc'
};
var array = []
// Get all the questions (http://api.stackexchange.com/docs/questions)
context.search.advanced(filter, function(err, results){
 if (err) throw err;
 array.push(results.items[1])
 console.log(results.items.length)
 console.log(results.items[1].title);
 console.log(results.items[2].title);
 console.log(results.items[3].title);
 console.log(results.items[4].title);
 console.log(results.items[5].title);
 console.log(results.items[6].title);
});
setTimeout(function(){
  console.log(array)
}, 10000);
// Try it Yourself »

console.log(array)
// var outputitem = require('./StackOverflowOutputItem')
// //
// // var stackexchange = require('stackexchange');
// // var options = { version: 2.2 };
// // var context = new stackexchange(options);
// //
//
// function StackOverflowBar(){
//
// }
//
// StackOverflowBar.prototype.getStackAPI = function (string) {
//     var filter = {
//      q: string,
//      answer: 1,
//      tagged: 'ruby',
//      sort: 'relevance',
//      order: 'asc'
//    };
//
//     context.search.advanced(filter, function(err, results){
//       if (err) throw err;
//       var item = [results.items[0].title, results.items[0].link];
//     })
//
//     return item;
// }
// //
// var stack = new StackOverflowBar()
// console.log(stack.getStackAPI("ruby"))
