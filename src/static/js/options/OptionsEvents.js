var loadOptions = require('./OptionsModules.js').loadOptions;
var saveOptions = require('./OptionsModules.js').saveOptions;
var d = document;
var resultsPromise = new Promise(function(resolve, reject){
  chrome.storage.local.get(function(result){
    resolve(result.stackOverflowResults);
  });
});

d.addEventListener('DOMContentLoaded', function(){loadOptions(resultsPromise, d);});
d.getElementById('save').addEventListener('click', function(){saveOptions(d);});
