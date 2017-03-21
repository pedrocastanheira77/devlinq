(function () {
  var language_div = document.getElementById("languages_div");
  var stackoverflowbar = document.getElementById("stackoverflowbar");
  if (language_div) {
    language_div.parentNode.removeChild(language_div);
  }
  if(stackoverflowbar){
    stackoverflowbar.parentNode.removeChild(stackoverflowbar);
  }
}(this));
