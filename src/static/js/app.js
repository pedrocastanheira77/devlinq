document.addEventListener('DOMContentLoaded', function() {
  var languageDiv = new Languages().createLanguageDiv();
  var officialDiv = new OfficialDocsView();
  setTimeout(function() {
    var currentDiv = document.getElementById("appbar");
    currentDiv.parentNode.insertBefore(languageDiv, currentDiv);
    currentDiv.parentNode.insertBefore(officialDiv, currentDiv);
  }, 1000);
});
