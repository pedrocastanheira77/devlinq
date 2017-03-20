var WebFont = require('webfontloader');

var LanguagesView = require("./languagebar/LanguagesBar.js");
var lang = new LanguagesView();
var createOfficialDiv = require("./languagebar/OfficialDocsResults.js").createOfficialDiv;
var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var stackbar = new StackOverflowBar();

devlinqExtention()

function devlinqExtention() {
  setTimeout(function() {
    loadFont();
    replaceLogo();
    createSpinner();
    var currentDiv = document.getElementById("appbar");
    languagesDiv(currentDiv);
    stackOverflowDiv(currentDiv);
  }, 3000);
}

function loadFont() {
  WebFont.load({
    google: {
      families: ['Raleway:300,700']
    }
    });
}

function replaceLogo(){
  document.getElementById("logocont").children[0].src = chrome.extension.getURL("/public/images/devlinq_logo_color.png");
}

function createSpinner() {
  var spinnerDiv = document.querySelector("#spinner");
  if (spinnerDiv) {
    spinnerDiv.parentNode.removeChild(spinnerDiv);
  };
}

function languagesDiv(currentDiv) {
  var languagesDiv = createLanguagesDiv(currentDiv);
  var languagesTitle = createLanguagesTitle(languagesDiv);
  insertDropdownIntoLanguages(languagesDiv);
  insertOfficialDocsIntoLanguages(languagesDiv);
}

function createLanguagesDiv(currentDiv) {
  var languagesDiv = document.createElement("div");
  languagesDiv.id = "languages_div";
  languagesDiv.className = "languages_div";
  currentDiv.parentNode.insertBefore(languagesDiv, currentDiv);
  return languagesDiv;
}

function createLanguagesTitle(languagesDiv) {
  var languagesTitle = document.createElement("h2");
  languagesTitle.className = "langauges_title";
  languagesTitle.insertAdjacentHTML('afterbegin', "OFFICIAL DOCUMENT");
  languagesDiv.insertAdjacentElement('afterbegin', languagesTitle);
  return languagesTitle;
}

function insertDropdownIntoLanguages(languagesDiv) {
  var optionsDiv = lang.createDropdownDiv();
  languagesDiv.insertAdjacentElement('beforeend', optionsDiv)
}

function insertOfficialDocsIntoLanguages(languagesDiv) {
  var officialDiv = createOfficialDiv();
  languagesDiv.insertAdjacentElement('beforeend', officialDiv)
}

function stackOverflowDiv(currentDiv) {
  var stackOverflowDiv = createStackOverflowDiv();
  currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
  var requestedNumberOfLinks = 5;
  insertStackOverflowAPI(requestedNumberOfLinks, stackOverflowDiv);
}

function createStackOverflowTitle(stackOverflowDiv) {
  var stackOverflowTitle = document.createElement("h2");
  stackOverflowTitle.className = "stackOverflow_title";
  stackOverflowTitle.insertAdjacentHTML('afterbegin', "STACK OVERFLOW");
  languagesDiv.insertAdjacentElement('afterbegin', languagesTitle);
  return stackOverflowTitle;
}

function createStackOverflowDiv() {
  var stackOverflowDiv = document.createElement("div");
  stackOverflowDiv.id = "stackoverflowbar";
  return stackOverflowDiv;
}

function insertStackOverflowAPI(requestedNumberOfLinks, stackOverflowDiv){
  var stackoverflowsearch = stackbar.decideStringForAPI();
  stackbar.getStackAPI(stackoverflowsearch, requestedNumberOfLinks).then(function(items){
    var numberOfLinks = Math.min(requestedNumberOfLinks, items.length);
    var googleResultUrls = document.getElementsByClassName("_Rm");
    console.log(googleResultUrls, "all google results");
    for(var i = 0; i < numberOfLinks; i++){
      stackOverflowDiv.insertAdjacentHTML('beforeend', '<p><b>'+items[i].getTitle()+'</b>\n'+items[i].getUrl()+'</p>');
      console.log(items[i].getUrl(), "returned stack item");
      for(var x = 0; x < googleResultUrls.length; x++){
        if (items[i].getUrl().includes(googleResultUrls[x].innerHTML)){
          console.log(googleResultUrls[x].innerHTML,"match found");
          var box = googleResultUrls[x].parentNode.parentNode.parentNode.parentNode;
          if (box) {box.parentNode.removeChild(box)};
        };
      };
    }
  });
}
