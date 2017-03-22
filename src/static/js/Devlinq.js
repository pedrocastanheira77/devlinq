var WebFont = require('webfontloader');
var LanguagesView = require("./languagebar/LanguagesBar.js");
var lang = new LanguagesView();
var createOfficialDiv = require("./languagebar/OfficialDocsResults.js").createOfficialDiv;
var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var stackbar = new StackOverflowBar();
var savedNumberOfLinks;
// getRequestedNumberOfLinks();

devlinqExtention();

function devlinqExtention() {
  setTimeout(function() {
    loadFont();
    replaceLogo();
    createSpinner();
    var currentDiv = document.getElementById("appbar");
    languagesDiv(currentDiv);
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

function replaceLogo(){
  var logo;
  if (document.getElementById("logo")) {
    logo = document.getElementById("logo");
    logo.children[0].src = chrome.extension.getURL("/public/images/devlinq_logo_color.png");
  } else if (document.getElementById("logocont")) {
    logo = document.getElementById("logocont");
    logo.children[0].children[0].src = chrome.extension.getURL("/public/images/devlinq_logo_color.png");
  }
  // new code
  logo.setAttribute('href', 'https://devlinq.herokuapp.com/');
  // new code
}

function createSpinner() {
  var spinnerDiv = document.querySelector("#spinner");
  if (spinnerDiv) {
    spinnerDiv.parentNode.removeChild(spinnerDiv);
  }
}

// Languages Div

function languagesDiv(currentDiv) {
  var languagesDiv = createLanguagesDiv(currentDiv);
  var languagesTitle = createLanguagesTitle(languagesDiv);
  insertDropdownIntoLanguages(languagesDiv);
  insertOfficialDocsIntoLanguages(languagesDiv);
}

function createLanguagesDiv(currentDiv) {
  var languagesDiv = document.createElement("div");
  languagesDiv.id = "languages_div";
  languagesDiv.className = "devlinq_div languages_div";
  currentDiv.parentNode.insertBefore(languagesDiv, currentDiv);
  return languagesDiv;
}

function createLanguagesTitle(languagesDiv) {
  var languagesTitle = document.createElement("h2");
  languagesTitle.className = "langauges_title";
  languagesTitle.insertAdjacentHTML('afterbegin', "OFFICIAL DOCUMENTATION");
  languagesDiv.insertAdjacentElement('afterbegin', languagesTitle);
  return languagesTitle;
}

function insertDropdownIntoLanguages(languagesDiv) {
  var optionsDiv = lang.createDropdownDiv();
  languagesDiv.insertAdjacentElement('beforeend', optionsDiv);
}

function insertOfficialDocsIntoLanguages(languagesDiv) {
  var officialDiv = createOfficialDiv();
  languagesDiv.insertAdjacentElement('beforeend', officialDiv);
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
        '<div class="so_item"><a href='+items[i].getUrl()+'><p class="linq linq_so">'+items[i].getTitle()+'</p><p class="so_info">View Count: <mark class="score">'+items[i].getViewCount()+'</mark>Answer Count: <mark class="score">'+items[i].getAnswerCount()+'</mark>Score: <mark class="score">'+items[i].getScore()+'</mark></p></a></div>');
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
  createLanguagesDiv,
  createLanguagesTitle,
  insertDropdownIntoLanguages,
  insertOfficialDocsIntoLanguages,
  stackOverflowDiv,
  createStackOverflowTitle,
  createStackOverflowDiv,
  insertStackOverflowAPI,
  devlinqExtention,
  loadFont,
  languagesDiv
}
