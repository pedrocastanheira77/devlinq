(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var clickButtonStatus = "on";
var triggerContentsScripts = require("./BackgroundFunctions.js").triggerContentsScripts;
var changeClickButtonStatus = require("./BackgroundFunctions.js").changeClickButtonStatus;
var pageRefresher = require("./BackgroundFunctions.js").pageRefresher;


chrome.browserAction.onClicked.addListener(function(tab){
  changeClickButtonStatus();
  pageRefresher();
});

chrome.tabs.onUpdated.addListener(triggerContentsScripts);

},{"./BackgroundFunctions.js":2}],2:[function(require,module,exports){
function triggerContentsScripts(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && clickButtonStatus === "on") {
    pageCleaner();
    runContentScripts();
  } else if (changeInfo.status === "loading" && clickButtonStatus === "on") {
    runSpinner();
  }
}

function changeClickButtonStatus(){
  if (clickButtonStatus === "off"){
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_color.png"})
    return clickButtonStatus = "on";
  } else {
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_black.png"})
    return clickButtonStatus = "off";
  }
}

function pageRefresher(){
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
  });
}

function runSpinner() {
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/spinner/Spinner.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/spinner/SpinnerView.js"});
  });
}

function runContentScripts() {
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    chrome.tabs.insertCSS(specTab.id, {file:"src/static/css/style.css"});
    chrome.tabs.executeScript(specTab.id, {file:"bundle.js"});
  });
}

function pageCleaner() {
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/PageCleaner.js"});
  });
}

module.exports = {
  triggerContentsScripts,
  changeClickButtonStatus,
  pageRefresher
}

},{}]},{},[1]);
