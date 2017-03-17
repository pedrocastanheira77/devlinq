

var clickButtonStatus = "off"

chrome.browserAction.onClicked.addListener(function(tab){
  updateClickButtonStatus();
  console.log(clickButtonStatus);
  pageRefresher();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(changeInfo.status);
  if (changeInfo.status === "complete" && clickButtonStatus === "on"){
    runScripts();
  }
});

function updateClickButtonStatus(){
  if (clickButtonStatus === "off"){
    return clickButtonStatus = "on"
  } else {
    return clickButtonStatus = "off"
  }
}

function pageRefresher(){
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
  });
}

function runScripts() {
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    chrome.tabs.insertCSS(specTab.id, {file:"src/static/css/style.css"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/languagebar/RubyInBar.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/languagebar/JavascriptInBar.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/languagebar/JqueryInBar.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/languagebar/LanguagesBar.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/languagebar/OfficialDocsOutput.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/Devlinq.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/languagebar/EventLanguageBar.js"});
  });
}
