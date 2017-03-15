function Languages(){
  this.ruby = new Ruby();
  this.javascript = new Javascript();
  this.languageList = [ this.ruby.name,
                        this.javascript.name
                      ];
}

Languages.prototype.getVersions = function() {
  return this.versionList = [ this.ruby.versions,
                              this.javascript.versions
                            ];
};

Languages.prototype.getTopics = function() {
  return this.topicList = [ this.ruby.topics,
                            this.javascript.topics
                          ];
};

Languages.prototype.getLanguages = function() {
  return this.languageList;
};

Languages.prototype.createDummyOption = function(string, list) {
  var option_dummy = document.createElement('option');
  option_dummy.selected = "selected";
  option_dummy.disabled = "disabled";
  option_dummy.value = "Choose a " + string;
  option_dummy.innerHTML = "Choose a " + string;
  list.appendChild(option_dummy);
};

Languages.prototype.createLanguageDropdown = function(){
  var languageDropdownList = document.createElement("select");
  languageDropdownList.id = "languageDropdownList";
  this.createDummyOption("language", languageDropdownList)
  for (var i=0;i<this.getLanguages().length;i++){
    var option = document.createElement('option');
    option.value = this.getLanguages()[i];
    option.innerHTML = this.getLanguages()[i];
    languageDropdownList.appendChild(option);
  };
  return languageDropdownList;
};

Languages.prototype.createVersionDropdown = function(language){
  var versionDropdownList = document.createElement("select");
  versionDropdownList.id = "versionDropdownList";
  this.createDummyOption("version", versionDropdownList);
  return versionDropdownList;
};

Languages.prototype.generateVersionOptions = function (versionDropdownList, language) {
  var languageIndex = this.getLanguages().indexOf(language);
  var versionDropdownList = document.getElementById("versionDropdownList");
  this.createDummyOption("version", versionDropdownList)
  for (var i=0; i<this.getVersions()[languageIndex].length; i++){
    var option= document.createElement('option');
    option.value = this.getVersions()[languageIndex][i];
    option.innerHTML = this.getVersions()[languageIndex][i];
    versionDropdownList.appendChild(option);
  }
};

Languages.prototype.createTopicDropdown = function(language){
  var topicDropdownList = document.createElement("select");
  topicDropdownList.id = "topicDropdownList";
  this.createDummyOption("topic", topicDropdownList);
  return topicDropdownList;
};

Languages.prototype.generateTopicOptions = function(versionDropdownList, language) {
  var languageIndex = this.getLanguages().indexOf(language);
  var topicDropdownList = document.getElementById("topicDropdownList");
  this.createDummyOption("topic", topicDropdownList)
  for (var i=0; i<this.getTopics()[languageIndex].length; i++){
    var option= document.createElement('option');
    option.value = this.getTopics()[languageIndex][i];
    option.innerHTML = this.getTopics()[languageIndex][i];
    topicDropdownList.appendChild(option);
  }
};

Languages.prototype.createSubmitSearchButton = function () {
  var submitSearchButton = document.createElement("button");
  submitSearchButton.id = "submitSearchButton";
  submitSearchButton.innerHTML = "Search!";
  return submitSearchButton;
};

Languages.prototype.createLanguageDiv = function() {
  var languageDiv = document.createElement("div");
  languageDiv.id = "language";
  languageDiv.appendChild(this.createLanguageDropdown());
  languageDiv.appendChild(this.createVersionDropdown());
  languageDiv.appendChild(this.createTopicDropdown());
  languageDiv.appendChild(this.createSubmitSearchButton());
  return languageDiv;
};
