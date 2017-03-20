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

function splitStringIntoArray(string) {
  return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '').split(' ');
}

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
  haveTopic,
  splitStringIntoArray
};
