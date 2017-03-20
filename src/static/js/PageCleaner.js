(function () {
  console.log("CLEANER");
  var language_div = document.getElementById("languages_div");
  var stackoverflowbar = document.getElementById("stackoverflowbar");
  console.log(language_div);
  console.log(stackoverflowbar);
  language_div.parentNode.removeChild(language_div);
  stackoverflowbar.parentNode.removeChild(stackoverflowbar);
}(this));
