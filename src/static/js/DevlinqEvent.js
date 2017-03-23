var theDocument = document;
var theChrome = chrome;
var devlinqExtention = require('./Devlinq.js').devlinqExtention;
var savedNumberOfLinks = getRequestedNumberOfLinks(chrome);

devlinqExtention(theDocument, theChrome, savedNumberOfLinks);

function getRequestedNumberOfLinks(chrome) {
  chrome.storage.local.get(function(result){
    savedNumberOfLinks = result.stackOverflowResults;
  });
}
