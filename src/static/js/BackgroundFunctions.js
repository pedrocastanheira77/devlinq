function triggerContentsScripts(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && clickButtonStatus === "on") {
    pageCleaner();
    runContentScripts();
  } else if (changeInfo.status === "loading" && clickButtonStatus === "on") {
    runSpinner();
  }
}

function changeClickButtonStatus(clickButtonStatus, chrome){
  if (clickButtonStatus === "off"){
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_color.png"})
    return "on";
  } else {
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_black.png"})
    return "off";
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
