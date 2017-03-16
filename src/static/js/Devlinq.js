document.addEventListener('DOMContentLoaded', function() {
  var optionsDiv = new LanguagesView().createLanguageDiv();
  var officialDiv = new OfficialDocsView().createOfficialDiv();
  setTimeout(function() {
    var currentDiv = document.getElementById("appbar");
    currentDiv.parentNode.insertBefore(optionsDiv, currentDiv);
    currentDiv.parentNode.insertBefore(officialDiv, currentDiv);
  }, 5000);
});
