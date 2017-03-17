document.addEventListener('DOMContentLoaded', function() {
  var optionsDiv = new LanguagesView().createLanguageDiv();
  var officialDiv = new OfficialDocsView().createOfficialDiv();
  setTimeout(function() {
    var currentDiv = document.getElementById("appbar");
    currentDiv.parentNode.insertBefore(optionsDiv, currentDiv);
    currentDiv.parentNode.insertBefore(officialDiv, currentDiv);

    var stackOverflowDiv = document.createElement("div");
    stackOverflowDiv.id = "stackoverflowbar";
    currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
  }, 5000);
});
