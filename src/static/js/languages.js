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
    eval("var option" + (i+1) + "= document.createElement('option')");
    eval("option" + (i+1) + ".value = this.getLanguages()[i]");
    eval("option" + (i+1) + ".innerHTML = this.getLanguages()[i]");
    eval("languageDropdownList.appendChild(option" + (i+1) +")");
  }
  return languageDropdownList;
};

Languages.prototype.createVersionDropdown = function(language){
  var languageIndex = this.getLanguages().indexOf(language);
  var versionDropdownList = document.createElement("select");
  versionDropdownList.id = "versionDropdownList";
  this.createDummyOption("version", versionDropdownList)
  for (var i=0; i<this.getVersions()[languageIndex].length; i++){
    eval("var option" + (i+1) + "= document.createElement('option')");
    eval("option" + (i+1) + ".value = this.getVersions()[languageIndex][i]");
    eval("option" + (i+1) + ".innerHTML = this.getVersions()[languageIndex][i]");
    eval("versionDropdownList.appendChild(option" + (i+1) +")");
  }
  return versionDropdownList;
};

Languages.prototype.createTopicDropdown = function(language){
  var languageIndex = this.getLanguages().indexOf(language);
  var topicDropdownList = document.createElement("select");
  topicDropdownList.id = "topicDropdownList";
  this.createDummyOption("topic", topicDropdownList)
  for (var i=0; i<this.getTopics()[languageIndex].length; i++){
    eval("var option" + (i+1) + "= document.createElement('option')");
    eval("option" + (i+1) + ".value = this.getTopics()[languageIndex][i]");
    eval("option" + (i+1) + ".innerHTML = this.getTopics()[languageIndex][i]");
    eval("topicDropdownList.appendChild(option" + (i+1) +")");
  }
  return topicDropdownList;
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
  languageDiv.appendChild(this.createVersionDropdown("Ruby"));
  languageDiv.appendChild(this.createTopicDropdown("Ruby"));
  languageDiv.appendChild(this.createSubmitSearchButton());
  return languageDiv;
};
