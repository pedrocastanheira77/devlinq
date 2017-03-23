var Ruby = require('./lib/RubyInBar.js');
var Javascript = require('./lib/JavascriptInBar.js');
var JQuery = require('./lib/JqueryInBar.js');
var ChromeExtensions = require('./lib/ChromeExtensionsInBar.js');
var compareSearchBarInfo = require('./RelevantWordFinder.js').compareSearchBarInfo;
var createOfficialDiv = require("./OfficialDocsResults.js").createOfficialDiv;

function LanguagesView(){
  this.ruby = new Ruby();
  this.javascript = new Javascript();
  this.jquery = new JQuery();
  this.chromeextensions = new ChromeExtensions();
};

///////////// new

LanguagesView.prototype.languagesDiv = function(currentDiv, doc) {
  var languagesDiv = this.createLanguagesDiv(currentDiv, doc);
  this.createLanguagesTitle(languagesDiv, doc);
  this.insertDropdownIntoLanguages(languagesDiv, doc);
  this.insertOfficialDocsIntoLanguages(languagesDiv);
}

LanguagesView.prototype.createLanguagesDiv = function(currentDiv, doc) {
  var languages_div = doc.getElementById("languages_div")
  if (languages_div){
    languages_div.parentNode.removeChild(languages_div)
  }
  var languagesDiv = doc.createElement("div");
  languagesDiv.id = "languages_div";
  languagesDiv.className = "devlinq_div languages_div";
  currentDiv.parentNode.insertBefore(languagesDiv, currentDiv);
  return languagesDiv;
}
//no test
LanguagesView.prototype.createLanguagesTitle = function(languagesDiv, doc) {
  if (languagesDiv) {
    var languagesTitle = doc.createElement("h2");
    languagesTitle.className = "languages_title";
    languagesTitle.innerHTML = "OFFICIAL DOCUMENTATION";
    languagesDiv.appendChild(languagesTitle);
    return languagesTitle;
  }
}
//no test
LanguagesView.prototype.insertDropdownIntoLanguages = function(languagesDiv, doc) {
  if (languagesDiv) {
    var optionsDiv = this.createDropdownDiv(doc);
    languagesDiv.insertAdjacentElement('beforeend', optionsDiv);
  }
}
//no test
LanguagesView.prototype.insertOfficialDocsIntoLanguages = function(languagesDiv) {
  if (languagesDiv) {
    var officialDiv = createOfficialDiv();
    languagesDiv.insertAdjacentElement('beforeend', officialDiv);
  }
}

///////////// new

LanguagesView.prototype.getLanguagesView = function() {
  this.languageList = [];
  for (var i=0;i<Object.keys(new LanguagesView()).length-1;i++) {
    var languageKey = Object.keys(new LanguagesView())[i];
    this.languageList.push(new LanguagesView()[languageKey].name);
  }
  return this.languageList;
};

LanguagesView.prototype.getVersions = function() {
  this.versionList = [];
  for (var i=0;i<Object.keys(new LanguagesView()).length-1;i++) {
    var languageKey = Object.keys(new LanguagesView())[i];
    this.versionList.push(new LanguagesView()[languageKey].versions);
  }
  return this.versionList;
};

LanguagesView.prototype.getTopics = function() {
  this.topicList = [];
  for (var i=0;i<Object.keys(new LanguagesView()).length-1;i++) {
    var languageKey = Object.keys(new LanguagesView())[i];
    this.topicList.push(new LanguagesView()[languageKey].topics);
  }
  return this.topicList;
};

LanguagesView.prototype.createDummyOption = function(string, list, doc) {
  var option_dummy = doc.createElement('option');
  option_dummy.selected = "selected";
  if (string === 'language'){ option_dummy.disabled = "disabled"; }
  option_dummy.value = "Choose a " + string;
  option_dummy.innerHTML = "Choose a " + string;
  list.appendChild(option_dummy);
};

LanguagesView.prototype.createLanguageDropdown = function(doc){
  var languageDropdownList = doc.createElement("select");
  languageDropdownList.id = "languageDropdownList";
  languageDropdownList.className = "language_dropdown dropdown";
  languageDropdownList.onchange = function() {
    new LanguagesView().versionDropdownChangeEvent(doc);
    new LanguagesView().topicDropdownChangeEvent(doc);
  };
  this.createDummyOption("language", languageDropdownList, doc);
  for (var i=0;i<this.getLanguagesView().length;i++){
    var option = doc.createElement('option');
    option.value = this.getLanguagesView()[i];
    option.innerHTML = this.getLanguagesView()[i];
    languageDropdownList.appendChild(option);
  }
  var res = compareSearchBarInfo(this.getLanguagesView(), this, doc)[0];
  if (res) {
    languageDropdownList.value = res;
    setTimeout(function(){
      new LanguagesView().versionDropdownChangeEvent(doc);
      new LanguagesView().topicDropdownChangeEvent(doc);
    }, 1000)
  }
  return languageDropdownList;
};
//commented out
LanguagesView.prototype.createVersionDropdown = function(doc){
  var versionDropdownList = doc.createElement("select");
  versionDropdownList.id = "versionDropdownList";
  versionDropdownList.className = "version_dropdown dropdown"
  this.createDummyOption("version", versionDropdownList, doc);
  var res = compareSearchBarInfo(this.getLanguagesView(), this, doc)[1];
  if (res) {
    setTimeout(function(){
      versionDropdownList.value = res;
    }, 1500)
  }
  return versionDropdownList;
};
//commented out
LanguagesView.prototype.generateVersionOptions = function(versionDropdownList, language, doc) {
  var languageIndex = this.getLanguagesView().indexOf(language);
  this.createDummyOption("version", versionDropdownList, doc);
  for (var i=0; i<this.getVersions()[languageIndex].length; i++){
    var option = doc.createElement('option');
    option.value = this.getVersions()[languageIndex][i];
    option.innerHTML = this.getVersions()[languageIndex][i];
    versionDropdownList.appendChild(option);
  }
};

LanguagesView.prototype.createTopicDropdown = function(doc){
  var topicDropdownList = doc.createElement('select');
  topicDropdownList.id = "topicDropdownList";
  topicDropdownList.className = "topic_dropdown dropdown"
  this.createDummyOption("topic", topicDropdownList, doc);
  var res = compareSearchBarInfo(this.getLanguagesView(), this, doc)[2];
  if (res) {
    setTimeout(function(){
      topicDropdownList.value = res;
    }, 1500)
  }
  return topicDropdownList;
};

LanguagesView.prototype.generateTopicOptions = function(topicDropdownList, language, doc) {
  var languageIndex = this.getLanguagesView().indexOf(language);
  this.createDummyOption("topic", topicDropdownList, doc);
  for (var i=0; i<this.getTopics()[languageIndex].length; i++){
    var option= doc.createElement('option');
    option.value = this.getTopics()[languageIndex][i];
    option.innerHTML = this.getTopics()[languageIndex][i];
    topicDropdownList.appendChild(option);
  }
};

LanguagesView.prototype.createSubmitSearchButton = function(doc) {
  var submitSearchButton = doc.createElement("button");
  submitSearchButton.id = "submitSearchButton";
  submitSearchButton.onclick = function(){
    new LanguagesView().submitSearchButtonEvent(doc);
  };
  submitSearchButton.innerHTML = "SEARCH";
  return submitSearchButton;
};

LanguagesView.prototype.createDropdownDiv = function(doc) {
  var languageDiv = doc.createElement("div");
  languageDiv.id = "language";
  languageDiv.className = "languages_select";
  languageDiv.appendChild(this.createLanguageDropdown(doc));
  languageDiv.appendChild(this.createVersionDropdown(doc));
  languageDiv.appendChild(this.createTopicDropdown(doc));
  languageDiv.appendChild(this.createSubmitSearchButton(doc));
  setTimeout(function(){
    new LanguagesView().submitSearchButtonEvent(doc);
  }, 1500)
  return languageDiv;
};
//no test
LanguagesView.prototype.fillInVersion = function(doc){
  var chosenLanguage = doc.querySelector('#languageDropdownList').value;
  var chosenVersion = doc.querySelector('#versionDropdownList').value;
  if (chosenVersion === 'Choose a version' && this[chosenLanguage.toLowerCase()]){
    doc.querySelector('#versionDropdownList').value = this[chosenLanguage.toLowerCase()].versions[0];
  };
};
//in submitSearchButton
LanguagesView.prototype.submitSearchButtonEvent = function(doc) {
  this.fillInVersion(doc);
  var chosenLanguage = doc.querySelector('#languageDropdownList').value;
  var chosenVersion = doc.querySelector('#versionDropdownList').value;
  var chosenTopic = doc.querySelector('#topicDropdownList').value;
  if (this[chosenLanguage.toLowerCase()]) {
      var officialDocLink = this[chosenLanguage.toLowerCase()].generateOfficialDocsURL(chosenVersion, chosenTopic);
      var docs = new LanguagesView()[chosenLanguage.toLowerCase()].nameOfDoc();
      new LanguagesView().addLinktoTag(officialDocLink, chosenLanguage, chosenVersion, chosenTopic, docs, doc);
  }
};

LanguagesView.prototype.addLinktoTag = function(officialDocLink, chosenLanguage, chosenVersion, chosenTopic, docs, doc){
  var link = doc.getElementById('link');
  link.href = officialDocLink;
  var topicReplace;
  if (chosenTopic === 'Choose a topic'){
    topicReplace = '';
  } else {
    topicReplace = ': ' + chosenTopic;
  }
  link.innerHTML = '<p class="linq linq_la">'+chosenLanguage+' ('+chosenVersion+')' + topicReplace + ' (from '+ docs +')</p>';
};
//commented out
LanguagesView.prototype.versionDropdownChangeEvent = function(doc) {
  var chosenLanguage = doc.querySelector('#languageDropdownList').value;
  var versionDropdown = doc.getElementById("versionDropdownList");
  versionDropdown.innerHTML = "";
  new LanguagesView().generateVersionOptions(versionDropdown, chosenLanguage, doc);
};
//commented out
LanguagesView.prototype.topicDropdownChangeEvent = function(doc) {
  var chosenLanguage = doc.querySelector('#languageDropdownList').value;
  var topicDropdown = doc.getElementById("topicDropdownList");
  topicDropdown.innerHTML = "";
  new LanguagesView().generateTopicOptions(topicDropdown, chosenLanguage, doc);
};

module.exports = LanguagesView;
