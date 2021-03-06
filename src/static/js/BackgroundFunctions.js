function triggerContentsScripts(tabId, changeInfo, tab, theChrome, clickButtonStatus) {
  if (changeInfo.status === "complete" && clickButtonStatus === "on") {
    pageCleaner(theChrome);
    runContentScripts(theChrome);
  } else if (changeInfo.status === "loading" && clickButtonStatus === "on") {
    runSpinner(theChrome);
  }
}

function changeClickButtonStatus(clickButtonStatus, chrome){
  if (clickButtonStatus === "off"){
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_color.png"});
    return "on";
  } else {
    chrome.browserAction.setIcon({path:"public/images/devlinq_icon_black.png"});
    return "off";
  }
}

function pageRefresher(theChrome){
  theChrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    theChrome.tabs.update(tabs[0].id, {url: tabs[0].url});
  });
}

function runSpinner(theChrome) {
  theChrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    theChrome.tabs.executeScript(specTab.id, {file:"src/static/js/spinner/Spinner.js"});
    theChrome.tabs.executeScript(specTab.id, {file:"src/static/js/spinner/SpinnerView.js"});
  });
}

function runContentScripts(theChrome) {
  theChrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    var specTab = tabs[0];
    theChrome.tabs.insertCSS(specTab.id, {file:"src/static/css/style.css"});
    theChrome.tabs.executeScript(specTab.id, {file:"bundle.js"});
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
  pageRefresher,
  runSpinner,
  runContentScripts,
  pageCleaner
}
