(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var loadOptions = require('./OptionsModules.js').loadOptions;
var saveOptions = require('./OptionsModules.js').saveOptions;
var d = document;
var c = chrome;
var resultsPromise = new Promise(function(resolve, reject){
  chrome.storage.local.get(function(result){
    resolve(result.stackOverflowResults);
  });
});

d.addEventListener('DOMContentLoaded', function(){loadOptions(resultsPromise, d);});
d.getElementById('save').addEventListener('click', function(){saveOptions(d, c);});

},{"./OptionsModules.js":2}],2:[function(require,module,exports){
function loadOptions(resultsPromise, theDocument) {
  resultsPromise.then(function(stackOverflowStoredResults){
    var currentValue = stackOverflowStoredResults ? stackOverflowStoredResults : "5";
    var stackOverflowResultsOption = theDocument.querySelector('option[value="' + currentValue + '"]');
    stackOverflowResultsOption.selected = "selected";
    return theDocument;
  });
}

function saveOptions(theDocument, chrome) {
  var stackOverflowResults = theDocument.getElementById('stackOverflowResults').value;
  chrome.storage.local.set({"stackOverflowResults": stackOverflowResults});
  messageConfirmation(theDocument);
}

function messageConfirmation(theDocument){
  var messageConfirmation = theDocument.getElementById('saveConfirmation');
  messageConfirmation.innerHTML = "Saved successfully!";
  setTimeout(function() {
    messageConfirmation.innerHTML = '';
  }, 1000);
}

module.exports = {
  messageConfirmation,
  loadOptions,
  saveOptions
}

},{}]},{},[1]);
