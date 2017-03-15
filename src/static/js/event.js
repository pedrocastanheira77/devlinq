$(document).ready(function(){
  setTimeout(function(){
    var languages = new Languages();

    $("#submitSearchButton").click(function() {
      var chosenLanguage = $("#languageDropdownList option:selected").text();
      var chosenVersion = $("#versionDropdownList option:selected").text();
      var chosenTopic = $("#topicDropdownList option:selected").text();
      var officialDocLink = languages[chosenLanguage.toLowerCase()].getURL(chosenVersion, chosenTopic);
      $("#link").attr("href", officialDocLink);
      $("#link").html(officialDocLink);
    });

    $("#languageDropdownList").change(function(){
    var chosenLanguage = $("#languageDropdownList option:selected").text();
    var versionDropdown = document.getElementById("versionDropdownList")
    $('#versionDropdownList').empty();
    var list = new Languages().generateVersionOptions(versionDropdown, chosenLanguage);
    });

    $("#languageDropdownList").change(function(){
      var chosenLanguage = $("#languageDropdownList option:selected").text();
      var topicDropdown = document.getElementById("topicDropdownList")
      $('#topicDropdownList').empty();
      var list = new Languages().generateTopicOptions(topicDropdown, chosenLanguage);
    });
  }, 2000);
});
