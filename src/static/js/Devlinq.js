var WebFont = require('webfontloader');
var LanguagesView = require("./languagebar/LanguagesBar.js");
var lang = new LanguagesView();
var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var stackOverflowDiv = require("./stackoverflowbar/StackOverflowBar.js").stackOverflowDiv;
var stackbar = new StackOverflowBar();
var savedNumberOfLinks = getRequestedNumberOfLinks();

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
  stackbar.stackOverflowDiv(currentDiv, savedNumberOfLinks, theDocument);
}

function loadFont() {
  WebFont.load({
    google: {
      families: ['Raleway:400,500,600,700,900']
    }
  });
}

function replaceLogo(theDocument, theChrome){
  var logo = theDocument.getElementById("logo");
  var logocont = theDocument.getElementById("logocont");
  var logourl = theChrome.extension.getURL("/public/images/devlinq_logo_color.png");
  if (logo) {
    logo.children[0].src = logourl;
  } else if (logocont) {
    logocont.children[0].children[0].src = logourl;
  }
  logo.setAttribute('href', 'https://devlinq.herokuapp.com/');
}

function createSpinner(theDocument) {
  var spinnerDiv = theDocument.querySelector("#spinner");
  if (spinnerDiv) {
    spinnerDiv.parentNode.removeChild(spinnerDiv);
  }
}

function getRequestedNumberOfLinks() {
  chrome.storage.local.get(function(result){
    savedNumberOfLinks = result.stackOverflowResults;
  });
}

module.exports = {
  devlinqExtention,
  createSpinner,
  replaceLogo,
  loadFont
}
