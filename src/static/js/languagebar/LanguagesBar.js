var Ruby = require('./lib/RubyInBar.js');
var Javascript = require('./lib/JavascriptInBar.js');
var JQuery = require('./lib/JqueryInBar.js');
var ChromeExtensions = require('./lib/ChromeExtensionsInBar.js');
var haveLanguage = require('./RelevantWordFinder.js').haveLanguage;
var haveVersion = require('./RelevantWordFinder.js').haveVersion;
var haveTopic = require('./RelevantWordFinder.js').haveTopic;
var splitStringIntoArray = require('./RelevantWordFinder.js').splitStringIntoArray;
var createOfficialDiv = require("./OfficialDocsResults.js").createOfficialDiv;

function LanguagesView(){
  this.ruby = new Ruby();
  this.javascript = new Javascript();
  this.jquery = new JQuery();
  this.chromeextensions = new ChromeExtensions();
};

///////////// new

LanguagesView.prototype.languagesDiv = function(currentDiv) {
  var languagesDiv = this.createLanguagesDiv(currentDiv);
  this.createLanguagesTitle(languagesDiv);
  this.insertDropdownIntoLanguages(languagesDiv);
  this.insertOfficialDocsIntoLanguages(languagesDiv);
}

LanguagesView.prototype.createLanguagesDiv = function(currentDiv) {
  var languages_div = document.getElementById("languages_div")
  if (languages_div){
    languages_div.parentNode.removeChild(languages_div)
  }
  var languagesDiv = document.createElement("div");
  languagesDiv.id = "languages_div";
  languagesDiv.className = "devlinq_div languages_div";
  currentDiv.parentNode.insertBefore(languagesDiv, currentDiv);
  return languagesDiv;
}

LanguagesView.prototype.createLanguagesTitle = function(languagesDiv) {
  if (languagesDiv) {
    var languagesTitle = document.createElement("h2");
    languagesTitle.className = "langauges_title";
    languagesTitle.insertAdjacentHTML('afterbegin', "OFFICIAL DOCUMENTATION");
    languagesDiv.insertAdjacentElement('afterbegin', languagesTitle);
    return languagesTitle;
  }
}

LanguagesView.prototype.insertDropdownIntoLanguages = function(languagesDiv) {
  if (languagesDiv) {
    var optionsDiv = this.createDropdownDiv();
    languagesDiv.insertAdjacentElement('beforeend', optionsDiv);
  }
}

LanguagesView.prototype.insertOfficialDocsIntoLanguages = function(languagesDiv) {
  if (languagesDiv) {
    var officialDiv = createOfficialDiv();
    languagesDiv.insertAdjacentElement('beforeend', officialDiv);
  }
}

///////////// new

LanguagesView.prototype.getInfoFromSearchBar = function() {
  var searched = document.getElementById("lst-ib").value;
  if (!searched) {
    searched = document.getElementById("lst-ib").innerHTML;
  }
  return splitStringIntoArray(searched);
}

LanguagesView.prototype.compareSearchBarInfo = function() {
  var array = this.getInfoFromSearchBar();
  var language, version, topic;
  for (var i = array.length - 1; i >= 0; i--){
    var l = haveLanguage(array[i], this);
    if (l > -1) {
      language = this.getLanguagesView()[l];
    }
  }
  if (language) {
    for (var j = array.length - 1; j >= 0; j--){
      var v = haveVersion(array[j], this[language.toLowerCase()]);
      var t = haveTopic(array[j], this[language.toLowerCase()]);
      if (v > -1) {
        version = this[language.toLowerCase()].versions[v];
      } else if (t > -1) {
        topic = this[language.toLowerCase()].topics[t];
      }
    }
  }
  return [language, version, topic];
}


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

LanguagesView.prototype.createDummyOption = function(string, list) {
  var option_dummy = document.createElement('option');
  option_dummy.selected = "selected";
  if (string === 'language'){ option_dummy.disabled = "disabled"; }
  option_dummy.value = "Choose a " + string;
  option_dummy.innerHTML = "Choose a " + string;
  list.appendChild(option_dummy);
};

LanguagesView.prototype.createLanguageDropdown = function(){
  var languageDropdownList = document.createElement("select");
  languageDropdownList.id = "languageDropdownList";
  languageDropdownList.className = "language_dropdown dropdown";
  languageDropdownList.onchange = function() {
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
  var res = this.compareSearchBarInfo()[0];
  if (res) {
    languageDropdownList.value = res;
    setTimeout(function(){
      new LanguagesView().versionDropdownChangeEvent();
      new LanguagesView().topicDropdownChangeEvent();
    }, 1000)
  }
  return languageDropdownList;
};

LanguagesView.prototype.createVersionDropdown = function(language){
  var versionDropdownList = document.createElement("select");
  versionDropdownList.id = "versionDropdownList";
  versionDropdownList.className = "version_dropdown dropdown"
  this.createDummyOption("version", versionDropdownList);
  var res = this.compareSearchBarInfo()[1];
  if (res) {
    setTimeout(function(){
      versionDropdownList.value = res;
    }, 1500)
  }
  return versionDropdownList;
};

LanguagesView.prototype.generateVersionOptions = function(versionDropdownList, language) {
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
  var res = this.compareSearchBarInfo()[2];
  if (res) {
    setTimeout(function(){
      topicDropdownList.value = res;
    }, 1500)
  }
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

LanguagesView.prototype.createSubmitSearchButton = function() {
  var submitSearchButton = document.createElement("button");
  submitSearchButton.id = "submitSearchButton";
  submitSearchButton.onclick = function(){
    new LanguagesView().submitSearchButtonEvent();
  };
  submitSearchButton.innerHTML = "SEARCH";
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
  setTimeout(function(){
    new LanguagesView().submitSearchButtonEvent();
  }, 1500)
  return languageDiv;
};

LanguagesView.prototype.fillInVersion = function(){
  var chosenLanguage = document.querySelector('#languageDropdownList').value;
  var chosenVersion = document.querySelector('#versionDropdownList').value;
  if (chosenVersion === 'Choose a version') {
    document.querySelector('#versionDropdownList').value = new LanguagesView()[chosenLanguage.toLowerCase()].versions[0];
  };
};

LanguagesView.prototype.submitSearchButtonEvent = function(){
  var chosenLanguage = document.querySelector('#languageDropdownList').value;
  var chosenVersion = document.querySelector('#versionDropdownList').value;
  var chosenTopic = document.querySelector('#topicDropdownList').value;
  if (chosenVersion === 'Choose a version') {
    document.querySelector('#versionDropdownList').value = new LanguagesView()[chosenLanguage.toLowerCase()].versions[0];
  };
  setTimeout(function(){
    var officialDocLink = new LanguagesView()[chosenLanguage.toLowerCase()].generateOfficialDocsURL(chosenVersion, chosenTopic);
    var docs = new LanguagesView()[chosenLanguage.toLowerCase()].nameOfDoc();
    new LanguagesView().addLinktoTag(officialDocLink, chosenLanguage, chosenVersion, chosenTopic, docs);
  }, 1500)

};

LanguagesView.prototype.addLinktoTag = function(officialDocLink, chosenLanguage, chosenVersion, chosenTopic, docs){
  var link = document.getElementById('link');
  link.href = officialDocLink;
  var topicReplace;
  if (chosenTopic === 'Choose a topic'){
    topicReplace = '';
  } else {
    topicReplace = ': ' + chosenTopic;
  }
  link.innerHTML = '<p class="linq linq_la">'+chosenLanguage+' ('+chosenVersion+')' + topicReplace + ' (from '+ docs +')</p>';
};

LanguagesView.prototype.versionDropdownChangeEvent = function() {
  var chosenLanguage = document.querySelector('#languageDropdownList').value;
  var versionDropdown = document.getElementById("versionDropdownList");
  versionDropdown.innerHTML = "";
  new LanguagesView().generateVersionOptions(versionDropdown, chosenLanguage);
};

LanguagesView.prototype.topicDropdownChangeEvent = function() {
  var chosenLanguage = document.querySelector('#languageDropdownList').value;
  var topicDropdown = document.getElementById("topicDropdownList");
  topicDropdown.innerHTML = "";
  new LanguagesView().generateTopicOptions(topicDropdown, chosenLanguage);
};

module.exports = LanguagesView;
