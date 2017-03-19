var StackOverflowBar = require("./stackoverflowbar/StackOverflowBar.js");
var LanguagesView = require("./languagebar/LanguagesBar.js");
var OfficialDocsView = require("./languagebar/OfficialDocsOutput.js");

// document.addEventListener('DOMContentLoaded', function() {
  var lang = new LanguagesView();
  var optionsDiv = lang.createLanguageDiv();

  var docs = new OfficialDocsView();
  var officialDiv = docs.createOfficialDiv();
  setTimeout(function() {
    var currentDiv = document.getElementById("appbar");
    currentDiv.parentNode.insertBefore(optionsDiv, currentDiv);
    currentDiv.parentNode.insertBefore(officialDiv, currentDiv);

    var stackOverflowDiv = document.createElement("p");
    stackOverflowDiv.id = "stackoverflowbar";
    currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
    var stackbar = new StackOverflowBar();
    var numberOfLinks = 5;
    stackbar.getStackAPI("ruby array sort", numberOfLinks).then(function(items){
      for(var i = 0; i < numberOfLinks; i++){
        stackOverflowDiv.insertAdjacentHTML('beforeend', '<p><b>'+items[i].getTitle()+'</b>\n'+items[i].getUrl()+'</p>');
      }
    })
  }, 2000);
// });
