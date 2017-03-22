var WebFont = require('webfontloader');
var LanguagesView = require("./languagebar/LanguagesBar.js");
var lang = new LanguagesView();
var createOfficialDiv = require("./languagebar/OfficialDocsResults.js").createOfficialDiv;
var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var stackbar = new StackOverflowBar();
var savedNumberOfLinks;
var stackOverflowDiv = require("./stackoverflowbar/StackOverflowBar.js").stackOverflowDiv;


function devlinqExtention(theDocument, theChrome) {
  setTimeout(function() {
    preload(theDocument, theChrome)
    createLangAndStackDiv(theDocument)
  }, 3000);
}

function preload(theDocument, theChrome){
  loadFont();
  replaceLogo(theDocument, theChrome);
  createSpinner(theDocument);
}

function createLangAndStackDiv(theDocument){
  var currentDiv = theDocument.getElementById("appbar");
  lang.languagesDiv(currentDiv, theDocument);
  stackbar.stackOverflowDiv(currentDiv, savedNumberOfLinks);
}

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

module.exports = {
  devlinqExtention,
  createSpinner,
  replaceLogo,
  loadFont
}
