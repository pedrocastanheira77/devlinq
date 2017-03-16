function LanguagesView(){
  this.ruby = new Ruby();
  this.javascript = new Javascript();
  this.jquery = new JQuery();
}

LanguagesView.prototype.getLanguagesView = function() {
  this.languageList = []
  for (var i=0;i<Object.keys(new LanguagesView()).length;i++) {
    languageKey = Object.keys(new LanguagesView())[i]
    this.languageList.push(new LanguagesView()[languageKey].name);
  }
  return this.languageList;
};

LanguagesView.prototype.getVersions = function() {
  this.versionList = []
  for (var i=0;i<Object.keys(new LanguagesView()).length;i++) {
    languageKey = Object.keys(new LanguagesView())[i]
    this.versionList.push(new LanguagesView()[languageKey].versions);
  }
  return this.versionList;
};

LanguagesView.prototype.getTopics = function() {
  this.topicList = []
  for (var i=0;i<Object.keys(new LanguagesView()).length;i++) {
    languageKey = Object.keys(new LanguagesView())[i]
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
  this.createDummyOption("language", languageDropdownList)
  for (var i=0;i<this.getLanguagesView().length;i++){
    var option = document.createElement('option');
    option.value = this.getLanguagesView()[i];
    option.innerHTML = this.getLanguagesView()[i];
    languageDropdownList.appendChild(option);
  };
  return languageDropdownList;
};

LanguagesView.prototype.createVersionDropdown = function(language){
  var versionDropdownList = document.createElement("select");
  versionDropdownList.id = "versionDropdownList";
  this.createDummyOption("version", versionDropdownList);
  return versionDropdownList;
};

LanguagesView.prototype.generateVersionOptions = function (versionDropdownList, language) {
  var languageIndex = this.getLanguagesView().indexOf(language);
  var versionDropdownList = document.getElementById("versionDropdownList");
  this.createDummyOption("version", versionDropdownList)
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
  this.createDummyOption("topic", topicDropdownList);
  return topicDropdownList;
};

LanguagesView.prototype.generateTopicOptions = function(versionDropdownList, language) {
  var languageIndex = this.getLanguagesView().indexOf(language);
  var topicDropdownList = document.getElementById("topicDropdownList");
  this.createDummyOption("topic", topicDropdownList)
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
  submitSearchButton.innerHTML = "Search!";
  return submitSearchButton;
};

LanguagesView.prototype.createLanguageDiv = function() {
  var languageDiv = document.createElement("div");
  languageDiv.id = "language";
  languageDiv.appendChild(this.createLanguageDropdown());
  languageDiv.appendChild(this.createVersionDropdown());
  languageDiv.appendChild(this.createTopicDropdown());
  languageDiv.appendChild(this.createSubmitSearchButton());
  return languageDiv;
};
