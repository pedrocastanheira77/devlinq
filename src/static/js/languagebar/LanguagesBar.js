var Ruby = require('./lib/RubyInBar.js');
var Javascript = require('./lib/JavascriptInBar.js');
var JQuery = require('./lib/JqueryInBar.js');

function LanguagesView(){
  this.ruby = new Ruby();
  this.javascript = new Javascript();
  this.jquery = new JQuery();
};

LanguagesView.prototype.getLanguagesView = function() {
  this.languageList = [];
  for (var i=0;i<Object.keys(new LanguagesView()).length;i++) {
    var languageKey = Object.keys(new LanguagesView())[i];
    this.languageList.push(new LanguagesView()[languageKey].name);
  }
  return this.languageList;
};

LanguagesView.prototype.getVersions = function() {
  this.versionList = [];
  for (var i=0;i<Object.keys(new LanguagesView()).length;i++) {
    var languageKey = Object.keys(new LanguagesView())[i];
    this.versionList.push(new LanguagesView()[languageKey].versions);
  }
  return this.versionList;
};

LanguagesView.prototype.getTopics = function() {
  this.topicList = [];
  for (var i=0;i<Object.keys(new LanguagesView()).length;i++) {
    var languageKey = Object.keys(new LanguagesView())[i];
    this.topicList.push(new LanguagesView()[languageKey].topics);
  }
  return this.topicList;
};

LanguagesView.prototype.createDummyOption = function(string, list) {
  var option_dummy = document.createElement('option');
  option_dummy.selected = "selected";
  option_dummy.disabled = "disabled";
  option_dummy.value = "Choose a " + string;
  option_dummy.innerHTML = "Choose a " + string;
  list.appendChild(option_dummy);
};

LanguagesView.prototype.createLanguageDropdown = function(){
  var languageDropdownList = document.createElement("select");
  languageDropdownList.id = "languageDropdownList";
  languageDropdownList.className = "language_dropdown dropdown"
  languageDropdownList.onchange = function(){
    new LanguagesView().versionDropdownChangeEvent();
    new LanguagesView().topicDropdownChangeEvent();
  };
  this.createDummyOption("language", languageDropdownList);
  for (var i=0;i<this.getLanguagesView().length;i++){
    var option = document.createElement('option');
    option.value = this.getLanguagesView()[i];
    option.innerHTML = this.getLanguagesView()[i];
    languageDropdownList.appendChild(option);
  }
  return languageDropdownList;
};

LanguagesView.prototype.createVersionDropdown = function(language){
  var versionDropdownList = document.createElement("select");
  versionDropdownList.id = "versionDropdownList";
  versionDropdownList.className = "version_dropdown dropdown"
  this.createDummyOption("version", versionDropdownList);
  return versionDropdownList;
};

LanguagesView.prototype.generateVersionOptions = function (versionDropdownList, language) {
  var languageIndex = this.getLanguagesView().indexOf(language);
  this.createDummyOption("version", versionDropdownList);
  for (var i=0; i<this.getVersions()[languageIndex].length; i++){
    var option= document.createElement('option');
    option.value = this.getVersions()[languageIndex][i];
    option.innerHTML = this.getVersions()[languageIndex][i];
    versionDropdownList.appendChild(option);
  }
};

LanguagesView.prototype.createTopicDropdown = function(language){
  var topicDropdownList = document.createElement("select");
  topicDropdownList.id = "topicDropdownList";
  topicDropdownList.className = "topic_dropdown dropdown"
  this.createDummyOption("topic", topicDropdownList);
  return topicDropdownList;
};

LanguagesView.prototype.generateTopicOptions = function(topicDropdownList, language) {
  var languageIndex = this.getLanguagesView().indexOf(language);
  this.createDummyOption("topic", topicDropdownList);
  for (var i=0; i<this.getTopics()[languageIndex].length; i++){
    var option= document.createElement('option');
    option.value = this.getTopics()[languageIndex][i];
    option.innerHTML = this.getTopics()[languageIndex][i];
    topicDropdownList.appendChild(option);
  }
};

LanguagesView.prototype.createSubmitSearchButton = function () {
  var submitSearchButton = document.createElement("button");
  submitSearchButton.id = "submitSearchButton";
  submitSearchButton.onclick = function(){
    new LanguagesView().submitSearchButtonEvent();
  };
  submitSearchButton.innerHTML = "Search!";
  return submitSearchButton;
};

LanguagesView.prototype.createDropdownDiv = function() {
  var languageDiv = document.createElement("div");
  languageDiv.id = "language";
  languageDiv.className = "languages_select";
  languageDiv.appendChild(this.createLanguageDropdown());
  languageDiv.appendChild(this.createVersionDropdown());
  languageDiv.appendChild(this.createTopicDropdown());
  languageDiv.appendChild(this.createSubmitSearchButton());
  return languageDiv;
};

LanguagesView.prototype.submitSearchButtonEvent = function () {
  var chosenLanguage = document.querySelector('#languageDropdownList').value;
  var chosenVersion = document.querySelector('#versionDropdownList').value;
  var chosenTopic = document.querySelector('#topicDropdownList').value;
  var officialDocLink = new LanguagesView()[chosenLanguage.toLowerCase()].generateOfficialDocsURL(chosenVersion, chosenTopic);
  new LanguagesView().addLinktoTag(officialDocLink);
};

LanguagesView.prototype.addLinktoTag = function(officialDocLink){
  var link = document.getElementById('link');
  link.href = officialDocLink;
  link.innerHTML = officialDocLink;
};

LanguagesView.prototype.versionDropdownChangeEvent = function () {
  var chosenLanguage = document.querySelector('#languageDropdownList').value;
  var versionDropdown = document.getElementById("versionDropdownList");
  versionDropdown.innerHTML = "";
  var versionOptions = new LanguagesView().generateVersionOptions(versionDropdown, chosenLanguage);
};

LanguagesView.prototype.topicDropdownChangeEvent = function () {
  var chosenLanguage = document.querySelector('#languageDropdownList').value;
  var topicDropdown = document.getElementById("topicDropdownList");
  topicDropdown.innerHTML = "";
  var topicOptions = new LanguagesView().generateTopicOptions(topicDropdown, chosenLanguage);
};

module.exports = LanguagesView;
