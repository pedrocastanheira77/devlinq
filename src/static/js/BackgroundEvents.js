var clickButtonStatus = "on";
var triggerContentsScripts = require("./BackgroundFunctions.js").triggerContentsScripts;
var changeClickButtonStatus = require("./BackgroundFunctions.js").changeClickButtonStatus;
var pageRefresher = require("./BackgroundFunctions.js").pageRefresher;


chrome.browserAction.onClicked.addListener(function(tab){
  changeClickButtonStatus();
  pageRefresher();
});

chrome.tabs.onUpdated.addListener(triggerContentsScripts);
