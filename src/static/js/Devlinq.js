
var LanguagesView = require("./languagebar/LanguagesBar.js");
var lang = new LanguagesView();
var createOfficialDiv = require("./languagebar/OfficialDocsResults.js").createOfficialDiv;
var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var stackbar = new StackOverflowBar();

devlinqExtention()

function devlinqExtention() {
  setTimeout(function() {
    createSpinner();
    var currentDiv = document.getElementById("appbar");
    languagesDiv(currentDiv);
    stackOverflowDiv(currentDiv);
  }, 3000);
}

function createSpinner() {
  var spinnerDiv = document.querySelector("#spinner");
  if (spinnerDiv) {
    spinnerDiv.parentNode.removeChild(spinnerDiv);
  };
}

function languagesDiv(currentDiv) {
  insertDropdownIntoLanguages(currentDiv);
  insertOfficialDocsIntoLanguages(currentDiv);
}

function insertDropdownIntoLanguages(currentDiv) {
  var optionsDiv = lang.createLanguageDiv();
  currentDiv.parentNode.insertBefore(optionsDiv, currentDiv);
}

function insertOfficialDocsIntoLanguages(currentDiv) {
  var officialDiv = createOfficialDiv();
  currentDiv.parentNode.insertBefore(officialDiv, currentDiv);
}

function stackOverflowDiv(currentDiv) {
  var stackOverflowDiv = createStackOverflowDiv();
  currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
  var numberOfLinks = 5;
  insertStackOverflowAPI(numberOfLinks, stackOverflowDiv);
}

function createStackOverflowDiv() {
  var stackOverflowDiv = document.createElement("p");
  stackOverflowDiv.id = "stackoverflowbar";
  return stackOverflowDiv;
}

function insertStackOverflowAPI(numberOfLinks, stackOverflowDiv){
  var stackoverflowsearch = stackbar.decideStringForAPI();
  stackbar.getStackAPI(stackoverflowsearch, numberOfLinks).then(function(items){
    for(var i = 0; i < numberOfLinks; i++){
      stackOverflowDiv.insertAdjacentHTML('beforeend', '<p><b>'+items[i].getTitle()+'</b>\n'+items[i].getUrl()+'</p>');
    }
  });
}
