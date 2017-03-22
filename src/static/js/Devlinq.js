var WebFont = require('webfontloader');
var LanguagesView = require("./languagebar/LanguagesBar.js");
var lang = new LanguagesView();
var createOfficialDiv = require("./languagebar/OfficialDocsResults.js").createOfficialDiv;
var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var stackbar = new StackOverflowBar();
var savedNumberOfLinks;

// getRequestedNumberOfLinks();

// devlinqExtention();

function devlinqExtention(theDocument, theChrome) {
  setTimeout(function() {
    loadFont();
    replaceLogo(theDocument, theChrome);
    createSpinner(theDocument);
    var currentDiv = theDocument.getElementById("appbar");
    lang.languagesDiv(currentDiv);
    stackOverflowDiv(currentDiv, savedNumberOfLinks);
  }, 3000);
}

// Preload

function loadFont() {
  WebFont.load({
    google: {
      families: ['Raleway:400,500,600,700,900']
    }
    });
}

function replaceLogo(theDocument, theChrome){
  if (theDocument.getElementById("logo")) {
    theDocument.getElementById("logo").children[0].src = theChrome.extension.getURL("/public/images/devlinq_logo_color.png");
  } else if (theDocument.getElementById("logocont")) {
    theDocument.getElementById("logocont").children[0].children[0].src = theChrome.extension.getURL("/public/images/devlinq_logo_color.png");
  }
}

function createSpinner(theDocument) {
  var spinnerDiv = theDocument.querySelector("#spinner");
  if (spinnerDiv) {
    spinnerDiv.parentNode.removeChild(spinnerDiv);
  }
}

// Stack Overflow Div

function getRequestedNumberOfLinks() {
  chrome.storage.local.get(function(result){
    savedNumberOfLinks = result.stackOverflowResults;
  });
}

function stackOverflowDiv(currentDiv, requestedNumberOfLinks) {
  var stackOverflowDiv = createStackOverflowDiv();
  currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
  createStackOverflowTitle(stackOverflowDiv);
  if (!requestedNumberOfLinks) {
      requestedNumberOfLinks = 5;
    }
  insertStackOverflowAPI(requestedNumberOfLinks, stackOverflowDiv);
}

function createStackOverflowTitle(stackOverflowDiv) {
  var stackOverflowTitle = document.createElement("h2");
  stackOverflowTitle.className = "stackoverflow_title";
  stackOverflowTitle.insertAdjacentHTML('afterbegin', "STACK OVERFLOW");
  stackOverflowDiv.insertAdjacentElement('afterbegin', stackOverflowTitle);
  return stackOverflowTitle;
}

function createStackOverflowDiv() {
  var stackOverflowDiv = document.createElement("div");
  stackOverflowDiv.id = "stackoverflowbar";
  stackOverflowDiv.className = "devlinq_div stackoverflow_div";
  return stackOverflowDiv;
}

function insertStackOverflowAPI(requestedNumberOfLinks, stackOverflowDiv){
  var stackoverflowsearch = stackbar.decideStringForAPI();
  stackbar.getStackAPI(stackoverflowsearch, requestedNumberOfLinks).then(function(items){
    var numberOfLinks = Math.min(requestedNumberOfLinks, items.length);
    var googleResultUrls = document.getElementsByClassName("_Rm");
    for(var i = 0; i < numberOfLinks; i++){
      stackOverflowDiv.insertAdjacentHTML('beforeend',
        '<div class="so_item"><a href='+items[i].getUrl()+'><p class="linq linq_so">'+items[i].getTitle()+'</p><p class="so_info">View Count: '+items[i].getViewCount()+'; Answer Count: '+items[i].getAnswerCount()+'; Score: '+items[i].getScore()+'</p></a></div>');
      for(var x = 0; x < googleResultUrls.length; x++){
        if (items[i].getUrl().includes(googleResultUrls[x].innerHTML)){
          var box = googleResultUrls[x].parentNode.parentNode.parentNode.parentNode;
          if (box) {box.parentNode.removeChild(box);}
        }
      }
    }
  });
}

module.exports = {
  stackOverflowDiv,
  createStackOverflowTitle,
  createStackOverflowDiv,
  insertStackOverflowAPI,
  devlinqExtention,
  replaceLogo,
  loadFont
}
