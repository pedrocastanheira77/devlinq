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
  var newArray = arrayToLowerCase(array);
  var string = string.toLowerCase();
  var string_many = string + 's';
  var string_one = string.slice(0, -1);
  return Math.max(newArray.indexOf(string), newArray.indexOf(string_many), newArray.indexOf(string_one));
}

function arrayToLowerCase(array) {
  var newArray = new Array(array.length);
  for(var i=0; i < newArray.length; i++) {
    newArray[i] = array[i].toLowerCase();
  }
  return newArray;
}

module.exports = {
  haveLanguage,
  haveVersion,
  haveTopic,
  splitStringIntoArray
};
