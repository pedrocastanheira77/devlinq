var clickButtonStatus = "on";
var c = chrome;

chrome.browserAction.onClicked.addListener(function(tab){
  changeClickButtonStatus();
  pageRefresher(c);
});

chrome.tabs.onUpdated.addListener(triggerContentsScripts);

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
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_color.png"});
    return clickButtonStatus = "on";
  } else {
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_black.png"});
    return clickButtonStatus = "off";
  }
}

function pageRefresher(ourChrome){
  console.log("HERE");
  ourChrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    ourChrome.tabs.update(tabs[0].id, {url: tabs[0].url});
  });
}

function runSpinner() {
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/spinner/Spinner.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/spinner/SpinnerEvent.js"});
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
  pageRefresher
}
