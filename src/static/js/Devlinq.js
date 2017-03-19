var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var LanguagesView = require("./languagebar/LanguagesBar.js");
var createOfficialDiv = require("./languagebar/OfficialDocsResults.js").createOfficialDiv;

// document.addEventListener('DOMContentLoaded', function() {
  var lang = new LanguagesView();
  var optionsDiv = lang.createLanguageDiv();
  var officialDiv = createOfficialDiv();
  setTimeout(function() {
    var spinnerDiv = document.querySelector("#spinner");
    if (spinnerDiv) {
      spinnerDiv.parentNode.removeChild(spinnerDiv);
    }
    var currentDiv = document.getElementById("appbar");
    currentDiv.parentNode.insertBefore(optionsDiv, currentDiv);
    currentDiv.parentNode.insertBefore(officialDiv, currentDiv);

    var stackOverflowDiv = document.createElement("p");
    stackOverflowDiv.id = "stackoverflowbar";
    currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
    var stackbar = new StackOverflowBar();
    var numberOfLinks = 5;
    var stackoverflowsearch = stackbar.decideStringForAPI()
    stackbar.getStackAPI(stackoverflowsearch, numberOfLinks).then(function(items){
      for(var i = 0; i < numberOfLinks; i++){
        stackOverflowDiv.insertAdjacentHTML('beforeend', '<p><b>'+items[i].getTitle()+'</b>\n'+items[i].getUrl()+'</p>');
      }
    })
  }, 3000);
// });
