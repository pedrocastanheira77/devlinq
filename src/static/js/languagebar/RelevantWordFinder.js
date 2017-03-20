var Language = require('./LanguagesBar.js');

function haveLanguage(string, lang) {
  return isStringInArray(string, lang.listOfLanguages);
}

function haveVersion(string, lang) {
  return isStringInArray(string, lang.versions);
}

function haveTopic(string, lang) {
  return isStringInArray(string, lang.topics);
}

var lang = new Language();
var string = "jaVASCRIPT";
var version = "ecmascript5.1";
var topic = "atomic";
// console.log(haveLanguage(string, lang))
// console.log(haveVersion(version, lang.javascript))
// console.log(haveTopic(topic, lang.javascript))

function isStringInArray(string, array) {
  arrayToLowerCase(array);
  var string = string.toLowerCase();
  var string_many = string + 's';
  var string_one = string.slice(0, -1);;
  return (array.includes(string) || array.includes(string_many) || array.includes(string_one))
}

function arrayToLowerCase(array) {
  for(var i=0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
}

module.exports = {
  haveLanguage,
  haveVersion,
  haveTopic
};
