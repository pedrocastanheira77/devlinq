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

StackOverflowBar.prototype.decideStringForAPI = function (theDocument) {
  var searched = theDocument.getElementById("lst-ib").value;
  var stringForAPI = searched.replace(/(?:\d*\.)?\d+/g, '');
  return stringForAPI;
}

StackOverflowBar.prototype.getStackAPI = function (string, number) {
  return new Promise(function(resolve, reject) {
    var reqUri = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q="+string+"&site=stackoverflow&key=Gvi3HHcYwsdm2K69OzxUnQ((";
    request({
      uri: reqUri,
      json: true,
      gzip: true
    }).then(function(response) {
        var array = [];
        insertResponse(array, response, number)
      resolve(array);
    });
  });
}

function insertResponse(array, response, number){
  for (var i = 0; i < number; i++) {
    if (response.items[i]) {
      var item = [response.items[i].title, response.items[i].link, response.items[i].view_count, response.items[i].answer_count, response.items[i].score];
      array.push(new stackitem(item[0], item[1], item[2], item[3], item[4]));
    };
  };
}


StackOverflowBar.prototype.stackAPIresult = function (theDocument) {
  var exampleSOresult = theDocument.createElement("p");
  exampleSOresult.id = "exampleSOresult";
  exampleSOresult.innerHTML = this.decideStringForAPI(theDocument)
  return exampleSOresult;
}


StackOverflowBar.prototype.createStackOverflowDiv = function (theDocument) {
  var stackOverflowDiv = theDocument.createElement('div');
  stackOverflowDiv.id = "stackOverflow";
  stackOverflowDiv.appendChild(this.stackAPIresult(theDocument));
  return stackOverflowDiv
};

StackOverflowBar.prototype.getRequestedNumberOfLinks = function(theChrome) {
  var savedNumberOfLinks;
  theChrome.storage.local.get(function(result){
    savedNumberOfLinks = result.stackOverflowResults;
  });
}

StackOverflowBar.prototype.stackOverflowDiv = function(currentDiv, requestedNumberOfLinks, theDocument) {
  var stackOverflowDiv = this.createStackOverflowDiv(theDocument);
  currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
  this.createStackOverflowTitle(stackOverflowDiv, theDocument);
  if (!requestedNumberOfLinks) {
      requestedNumberOfLinks = 5;
  }
  this.insertStackOverflowAPI(requestedNumberOfLinks, stackOverflowDiv, theDocument);
}

StackOverflowBar.prototype.createStackOverflowTitle= function(stackOverflowDiv, theDocument) {
  var stackOverflowTitle = theDocument.createElement("h2");
  stackOverflowTitle.className = "stackoverflow_title";
  stackOverflowTitle.insertAdjacentHTML('afterbegin', "STACK OVERFLOW");
  stackOverflowDiv.insertAdjacentElement('afterbegin', stackOverflowTitle);
  return stackOverflowTitle;
}


StackOverflowBar.prototype.createStackOverflowDiv = function(theDocument) {
  var stackOverflowDiv = theDocument.createElement("div");
  stackOverflowDiv.id = "stackoverflowbar";
  stackOverflowDiv.className = "devlinq_div stackoverflow_div";
  return stackOverflowDiv;
}

StackOverflowBar.prototype.insertStackOverflowAPI = function(requestedNumberOfLinks, stackOverflowDiv, theDocument){
  var stackoverflowsearch = this.decideStringForAPI(theDocument);
  var doc = theDocument
  this.getStackAPI(stackoverflowsearch, requestedNumberOfLinks).then(function(items){
    var numberOfLinks = Math.min(requestedNumberOfLinks, items.length);
    var googleResultUrls = doc.getElementsByClassName("_Rm");
    createStackLinks(numberOfLinks, googleResultUrls, items, stackOverflowDiv);
  });
}

function createStackLinks(numberOfLinks, googleResultUrls, items, stackOverflowDiv){
  for(var i = 0; i < numberOfLinks; i++){
    var html = '<div class="so_item"><a href='+items[i].getUrl()+'><p class="linq linq_so">'+items[i].getTitle()+'</p><p class="so_info">View Count: '+items[i].getViewCount()+'; Answer Count: '+items[i].getAnswerCount()+'; Score: '+items[i].getScore()+'</p></a></div>';
    stackOverflowDiv.insertAdjacentHTML('beforeend', html);
    fillLinks(i, items, googleResultUrls);
  }
}

function fillLinks(i, items, googleResultUrls){
  for(var link = 0; link < googleResultUrls.length; link++){
    var googleResultsContainSame = items[i].getUrl().includes(googleResultUrls[link].innerHTML);
    if (googleResultsContainSame){ removeGoogleResult(googleResultUrls, link) };
  }
}

function removeGoogleResult(googleResultUrls, x){
  var box = googleResultUrls[x].parentNode.parentNode.parentNode.parentNode;
  if (box) {box.parentNode.removeChild(box);};
}

module.exports = StackOverflowBar;
