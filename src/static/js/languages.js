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

Languages.prototype.getLanguages = function() {
  return this.languageList;
};

Languages.prototype.createLanguageDropdown = function(){
  var languageDropdownList = document.createElement("select");
  languageDropdownList.id = "languageDropdownsList";
  var option_dummy = document.createElement('option');
  option_dummy.selected = "selected";
  option_dummy.disabled = "disabled";
  option_dummy.value = "Choose a language";
  option_dummy.innerHTML = "Choose a language";
  languageDropdownList.appendChild(option_dummy);
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
  versionDropdownList.id = "languageDropdownsList";
  console.log(document.createElement('option_1'));
  console.log(document.createElement('option_1'));
  console.log(document.createElement('option_1'));
  for (var i=0;i<this.getVersions().length;i++){
    eval("var option" + (i+1) + "= document.createElement('option')");
    eval("option" + (i+1) + ".value = this.getVersions()[languageIndex][i]");
    eval("option" + (i+1) + ".innerHTML = this.getVersions()[languageIndex][i]");
    eval("versionDropdownList.appendChild(option" + (i+1) +")");
  }
  console.log(option1);

  return versionDropdownList;
};

Languages.prototype.createLanguageDiv = function() {
  var languageDiv = document.createElement("div");
  languageDiv.id = "language";
  languageDiv.appendChild(this.createLanguageDropdown());
  languageDiv.appendChild(this.createVersionDropdown("ruby"));
  return languageDiv;
};
