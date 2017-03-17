document.addEventListener('DOMContentLoaded', function() {
  var optionsDiv = new LanguagesView().createLanguageDiv();
  var officialDiv = new OfficialDocsView().createOfficialDiv();
  var stackOverflowDiv = new StackOverflowBar().createStackOverflowDiv();
  stackOverflowDiv.id = "stackoverflowbar";

  setTimeout(function() {
    var currentDiv = document.getElementById("appbar");
    currentDiv.parentNode.insertBefore(optionsDiv, currentDiv);
    currentDiv.parentNode.insertBefore(officialDiv, currentDiv);
    currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
  }, 5000);
});
