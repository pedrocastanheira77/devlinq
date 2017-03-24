function haveLanguage(string, lang) {
  return isStringInArray(string, lang.getLanguagesView());
}

function haveVersion(string, lang) {
  return isStringInArray(string, lang.versions);
}

function haveTopic(string, lang) {
  return isStringInArray(string, lang.topics);
}

function splitStringIntoArray(string) {
  return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '').split(' ');
}

function isStringInArray(string, array) {
  var newArray = arrayToLowerCase(array);
  var string_low = string.toLowerCase();
  var string_many = string + 's';
  var string_one = string.slice(0, -1);
  return Math.max(newArray.indexOf(string_low), newArray.indexOf(string_many), newArray.indexOf(string_one));
}

function arrayToLowerCase(array) {
  var newArray = new Array(array.length);
  for(var i=0; i < newArray.length; i++) {
    newArray[i] = array[i].toLowerCase();
  }
  return newArray;
}

function getInfoFromSearchBar(theDocument) {
  var searched = theDocument.getElementById("lst-ib").value;
  if (!searched) {
    searched = theDocument.getElementById("lst-ib").innerHTML;
  }
  return splitStringIntoArray(searched);
}

function compareSearchBarInfo(getLanguagesView, that, doc) {
  var array = getInfoFromSearchBar(doc);
  var language, version, topic;
  for (var i = array.length - 1; i >= 0; i--){
    var l = haveLanguage(array[i], that);
    if (l > -1) {
      language = getLanguagesView[l];
    }
  }
  if (language) {
    for (var j = array.length - 1; j >= 0; j--){
      var v = haveVersion(array[j], that[language.toLowerCase()]);
      var t = haveTopic(array[j], that[language.toLowerCase()]);
      if (v > -1) {
        version = that[language.toLowerCase()].versions[v];
      } else if (t > -1) {
        topic = that[language.toLowerCase()].topics[t];
      }
    }
  }
  return [language, version, topic];
}

module.exports = {
  haveLanguage,
  haveVersion,
  haveTopic,
  arrayToLowerCase,
  isStringInArray,
  splitStringIntoArray,
  getInfoFromSearchBar,
  compareSearchBarInfo
};
