var clickButtonStatus = "off";

chrome.browserAction.onClicked.addListener(function(tab){
  changeClickButtonStatus();
  pageRefresher();
});

chrome.tabs.onUpdated.addListener(triggerContentsScripts);

function triggerContentsScripts(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && clickButtonStatus === "on") {
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
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/Spinner.js"});
    chrome.tabs.executeScript(specTab.id, {file:"src/static/js/SpinnerView.js"});
  });
}

function runContentScripts() {
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    chrome.tabs.insertCSS(specTab.id, {file:"src/static/css/style.css"});
    chrome.tabs.executeScript(specTab.id, {file:"bundle.js"});
  });
}
