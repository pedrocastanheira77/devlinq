$(document).ready(function(){
  setTimeout(function(){
  window.onload = function(){
    $("#submitSearchButton").click(function() {
      console.log(1)
      var chosenLanguage = $("#languageDropdownList option:selected").text();
      var chosenVersion = $("#versionDropdownList option:selected").text();
      var chosenTopic = $("#topicDropdownList option:selected").text();
      var officialDocLink = new LanguagesView()[chosenLanguage.toLowerCase()].getURL(chosenVersion, chosenTopic);
      $("#link").attr("href", officialDocLink);
      $("#link").html(officialDocLink);
    });

    $("#languageDropdownList").change(function(){
      console.log(2)
      var chosenLanguage = $("#languageDropdownList option:selected").text();
      var versionDropdown = document.getElementById("versionDropdownList")
      $('#versionDropdownList').empty();
      var list = new LanguagesView().generateVersionOptions(versionDropdown, chosenLanguage);
    });

    $("#languageDropdownList").change(function(){
      console.log(3)
      var chosenLanguage = $("#languageDropdownList option:selected").text();
      var topicDropdown = document.getElementById("topicDropdownList")
      $('#topicDropdownList').empty();
      var list = new LanguagesView().generateTopicOptions(topicDropdown, chosenLanguage);
    });
  };
  }, 2000);
});
