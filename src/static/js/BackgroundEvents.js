var clickButtonStatus = "on";
var triggerContentsScripts = require("./BackgroundFunctions.js").triggerContentsScripts;
var changeClickButtonStatus = require("./BackgroundFunctions.js").changeClickButtonStatus;
var pageRefresher = require("./BackgroundFunctions.js").pageRefresher;


chrome.browserAction.onClicked.addListener(function(tab){
  clickButtonStatus = changeClickButtonStatus(clickButtonStatus, chrome);
  pageRefresher(chrome);
});

chrome.tabs.onUpdated.addListener(triggerContentsScripts);
