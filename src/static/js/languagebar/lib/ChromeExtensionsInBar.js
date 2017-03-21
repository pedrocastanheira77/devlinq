function ChromeExtensions() {
  this.name = "ChromeExtensions",
  this.baseUrl = "https://developer.chrome.com/extensions/",
  this.offDocs = "Chrome Extensions",
  this.versions = [ "N/A"
                  ],
  this.topics = [ "accessibilityFeatures",
                  "alarms",
                  "bookmarks",
                  "browserAction",
                  "browsingData",
                  "certificateProvider",
                  "commands",
                  "contentSettings",
                  "contextMenus",
                  "cookies",
                  "debugger",
                  "declarativeContent",
                  "desktopCapture",
                  "devtools.inspectedWindow",
                  "devtools.network",
                  "devtools.panels",
                  "documentScan",
                  "downloads",
                  "enterprise.deviceAttributes",
                  "enterprise.platformKeys",
                  "events",
                  "extension",
                  "extensionTypes",
                  "fileBrowserHandler",
                  "fileSystemProvider",
                  "fontSettings",
                  "gcm",
                  "history",
                  "i18n",
                  "identity",
                  "idle",
                  "input.ime",
                  "instanceID",
                  "management",
                  "networking.config",
                  "notifications",
                  "omnibox",
                  "pageAction",
                  "pageCapture",
                  "permissions",
                  "platformKeys",
                  "power",
                  "printerProvider",
                  "privacy",
                  "proxy",
                  "runtime",
                  "sessions",
                  "storage",
                  "system.cpu",
                  "system.memory",
                  "system.storage",
                  "tabCapture",
                  "tabs",
                  "topSites",
                  "tts",
                  "ttsEngine",
                  "types",
                  "vpnProvider",
                  "wallpaper",
                  "webNavigation",
                  "webRequest",
                  "webstore",
                  "windows"
                ]
}

ChromeExtensions.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace(".", "_");
    return this.baseUrl + topic;
  }
};


ChromeExtensions.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = ChromeExtensions;
